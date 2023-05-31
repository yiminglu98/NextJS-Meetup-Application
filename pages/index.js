import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";
// Import server side code here will be detected and this will not be included in your clients side bundle
import { MongoClient } from "mongodb";


function HomePage(props){
    return (
      <>
        <Head>
          <title>NextJS Meetups</title>
          <meta
            name="description"
            content="Go through a highly interactive and active list of meetups we have"
          />
        </Head>
        <MeetupList meetups={props.meetups} />
      </>
    );
 
};

export async function getStaticProps(){
    const client = await MongoClient.connect(
        "mongodb+srv://<yourusername>:<yourpassword>@cluster0.27mpt1a.mongodb.net/?retryWrites=true&w=majority"
      );
      const db = client.db();
  
      const meetupsCollection = db.collection("meetups");

      const meetups = await meetupsCollection.find().toArray();

      client.close();

    

    return {
        props:{
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                description: meetup.description,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1
    };
};

export default HomePage;