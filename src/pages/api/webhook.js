import { buffer } from 'micro';
import * as admin from 'firebase-admin';

// Secure a connection to firebase from backend
const serviceAccount = require('../../../permissions.json');

const app = !admin.apps.length ? admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
}) : admin.app()

// Establish Stripe connection

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const fulfillOrder = async (session) => {
    console.log('Fulfilling order');

    return app.firestore().collection('users').doc(session.metadata.email).collection('orders').doc(session.id).set({
        amount: session.amount_total / 100,
        amount_shipping: session.total_details.amount_shipping / 100,
        images: JSON.parse(session.metadata.images),
        timestamp: admin.firestore.FieldValue.serverTimestamp()
    }).then(() => {
        console.log(`SUCCESS: Order ${session.id} has been added to the database`);
    })

}

export default async (req, res) => {
    if (req.method === 'POST'){
        const requestBuffer = await buffer(req);
        const payload = requestBuffer.toString()
        const sig = req.headers['stripe-signature'];

        let event;

        // Verify that the Event came from stripe
        try {
           event =  stripe.webhooks.constructEvent(payload, sig, endpointSecret);
        } catch(err) {
            console.log(err.message);
            return res.status(400).send(`Webhook error: ${err.message}`)
        }


        // Handle the checkout.session complete event
        if (event.type === 'checkout.session.completed'){
            const session = event.data.object;

            // Fulfill order
           return fulfillOrder(session).then(() => res.status(200)).catch((err) => res.status(400).send(`Webhook error: ${err.message}`))
        }
    }
};

// Disabling body parser for webhook handling
export const config = {
    api: {
        bodyParser: false,
        externalResolver: true
    }
}
