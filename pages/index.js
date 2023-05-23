import MeetupList from "../components/meetups/MeetupList";

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
    return {
        props:{
            meetups: DUMMY_MEETUPS
        },
        revalidate: 1
    };
};

export default HomePage;