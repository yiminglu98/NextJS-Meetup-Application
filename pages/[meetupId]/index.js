import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(){
    return (
      <MeetupDetail
        image="https://cdn.britannica.com/73/114973-050-2DC46083/Midtown-Manhattan-Empire-State-Building-New-York.jpg"
        title="somewhere in newyork"
        address="some city 5, some country"
        description="a city palce for meetup"
      />
    );
};

export async function getStaticPaths(){
  return {
    fallback: false,
    paths:[
      {
        params:{
          meetupId: 'm1'
        }
      },
      {
        params:{
          meetupId: 'm2'
        }
      }
    ]
  }
}

export async function getStaticProps(context){
  
  const meetupId = context.params.meetupId;


  return{
    props:{
      image: 'https://cdn.britannica.com/73/114973-050-2DC46083/Midtown-Manhattan-Empire-State-Building-New-York.jpg',
      id: meetupId,
      title: 'somewhere in newyork',
      address: 'some city 5, some country',
      description: 'a city palce for meetup'
    }
  };
};

export default MeetupDetails;