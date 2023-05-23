import MeetupList from "../components/meetups/MeetupList";

// Import server side code here will be detected and this will not be included in your clients side bundle
import { MongoClient } from "mongodb";

const DUMMY_MEETUPS = [
    {
        id:'m1',
        title:'First Meetup',
        image: 'https://cdn.britannica.com/73/114973-050-2DC46083/Midtown-Manhattan-Empire-State-Building-New-York.jpg',
        address: 'New York 203 Queen st',
        descripton: 'The largest city in the world'
    },
    {
        id:'m2',
        title:'Second Meetup',
        image: 'https://cdn.britannica.com/73/114973-050-2DC46083/Midtown-Manhattan-Empire-State-Building-New-York.jpg',
        address: 'New York 400 boardway ave',
        descripton: 'something dumb'
    },
]

function HomePage(props){
    return <MeetupList meetups={props.meetups} />
 
};

export async function getStaticProps(){
    const client = await MongoClient.connect(
        "mongodb+srv://yiming:yiming@cluster0.27mpt1a.mongodb.net/?retryWrites=true&w=majority"
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