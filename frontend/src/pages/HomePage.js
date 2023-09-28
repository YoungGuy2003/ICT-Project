import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './HomePage.css'; // Import the homepage.css file
import { Link } from 'react-router-dom';

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const workoutPlans = [
    { id: 1, title: 'Chest', duration: 'Monday', intensity: 'High' },
    { id: 2, title: 'Back', duration: 'Tuesday', intensity: 'Moderate' },
    { id: 3, title: 'Shoulders', duration: 'Wednesday', intensity: 'Heavy' },
    { id: 4, title: 'Biceps + core', duration: 'Thursday', intensity: 'Core-Intense' },
    { id: 5, title: 'Triceps + core', duration: 'Friday', intensity: 'Core-Intense' },
    { id: 6, title: 'Legs', duration: 'Saturday', intensity: 'Intense' },
    { id: 7, title: 'Rest', duration: 'Sunday', intensity: '-' },
  ];

  return (
    <div className="homepage text-center">
      <div className='text1'>
        <br></br>
        <h2 className='my-5'>Welcome to the Fitness Blog!</h2>
        <Carousel>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://e0.pxfuel.com/wallpapers/63/653/desktop-wallpaper-fitness-gym-boy.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>“Take care of your body. It’s the only place you have to live."</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://www.pixelstalk.net/wp-content/uploads/images6/Fitness-Wallpaper-High-Quality.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>“Once you are exercising regularly, the hardest thing is to stop it.” </h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://www.wallpapersun.com/wp-content/uploads/2022/07/We-Go-Jim-Wallpapersun-2.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>“Exercise should be regarded as tribute to the heart” </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://i.ytimg.com/vi/s5L3hO1ps8c/maxresdefault.jpg"
              alt="Fourth"
            />
            <Carousel.Caption>
              <h3>“Gym jao bc” </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <h3 className='my-3'>Current Best Workout Plans</h3>
        <p className='my-5'>Here you will find the latest workout plans to help you achieve your fitness goals.</p>

        <table className="table table-bordered table-striped text-center">
          <thead>
            <tr>
              <th>Title</th>
              <th>Day</th>
              <th>Intensity</th>
            </tr>
          </thead>
          <tbody>
            {workoutPlans.map(plan => (
              <tr key={plan.id}>
                <td>{plan.title}</td>
                <td>{plan.duration}</td>
                <td>{plan.intensity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br></br>
      <p className='my-3'> Do one program every day for 6x per week then repeat .</p>

      <div className="container my-4">
  
        
      </div>

      <div className="image-container workout-image">
        <img src="https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/6_day_ppl_-_1200x630.jpg?itok=hKlHF0Oj" alt="Person working out" className="workout-image" height="250" width="auto" />
        <img src="https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/muscular-guy-doing-cable-flys.jpg?itok=cSCNyLEj" alt="Person working out" className="workout-image" height="250" width="auto" />
        <img src="https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/5_day_dumbbell_workout_-_1200x630.jpg?itok=wvEt4RRY" alt="Person working out" className="workout-image" height="250" width="auto" />
      </div>
      <div className="button-container">
        <button className="tab py-5">
          <Link className="tab-link fs-4" to="/blog/:id">Visit our blogs here! </Link>
        </button>
      </div>
    </div>
  );
}
