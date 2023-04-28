import React, {useEffect} from 'react';
import ReviewCard from './ReviewCard';
import AOS from "aos";
import "aos/dist/aos.css";


const Review = () => {
    useEffect(()=>{
        AOS.init();
    },[]);

  return (
    <>
    <div className="container mt-2">
        <h1 class="text-center mb-5 text-purple" data-aos="zoom-in-up">R E V I E W</h1>
        <div className="row">
        <ReviewCard
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
            title="Maria Smantha"
            subtitle="Tour Guide"
            text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur."
        />
        <ReviewCard
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                    title="Lisa Cudrow"
                    subtitle="Women Rider"
                    text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur."

        />
        <ReviewCard
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                    title="John Smith"
                    subtitle="Marketing Specialist"
                    text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur."
        />
                    
        </div>
    </div>
    </>
  )
}

export default Review;