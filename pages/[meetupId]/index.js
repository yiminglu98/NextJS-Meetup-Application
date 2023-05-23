import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient } from "mongodb";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://cdn.britannica.com/73/114973-050-2DC46083/Midtown-Manhattan-Empire-State-Building-New-York.jpg"
      title="somewhere in newyork"
      address="some city 5, some country"
      description="a city palce for meetup"
    />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://yiming:yiming@cluster0.27mpt1a.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString()
      }
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      image:
        "https://cdn.britannica.com/73/114973-050-2DC46083/Midtown-Manhattan-Empire-State-Building-New-York.jpg",
      id: meetupId,
      title: "somewhere in newyork",
      address: "some city 5, some country",
      description: "a city palce for meetup",
    },
  };
}

export default MeetupDetails;
