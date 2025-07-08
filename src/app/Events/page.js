import React from 'react';
import Image from 'next/image';
import styles from '../styles/Events.module.css';

const events = [
  {
    id: 1,
    title: 'Women Empowerment',
    date: '15 August 2025',
    time: '10:00 AM',
    location: 'Jind,Haryana',
    image: '/g10.jpg',
    description: 'Women Empowerment Day'
  },
  {
    id: 2,
    title: 'Youth Empowerment',
    date: '2 October 2025',
    time: '11:00 AM',
    location: 'Saini Nagar Khatauli',
    image: '/YouthEmpoerment.jpg',
    description: 'Youth Empowerment Day'
  },
  {
    id: 3,
    title: 'Library Inauguration',
    date: '5 December 2025',
    time: '3:00 PM',
    location: 'Saharanpur',
    image: '/library.jpeg',
    description: 'Promoting digital access and literacy among citizens through innovative programs.'
  },
];

export default function UpcomingEvents() {
  return (
    <div className={`container-fluid min-vh-100 ${styles.eventsBg}`}>
      <div className="container py-5">
        <div className="text-center mb-5">
<h2 className={`${styles.tricolorTitle} display-4 fw-bold`}>Upcoming Events</h2>

          <p className="text-white fs-5">Join us in our mission for progress, unity, and development.</p>
          <hr className={styles.hrCustom} />
        </div>

        <div className="row">
          {events.map(event => (
            <div key={event.id} className="col-md-4 mb-4">
              <div className="card shadow-lg border-0 h-100">
                <Image src={event.image} alt={event.title} width={400} height={250} className="card-img-top rounded-top" />
                <div className="card-body">
                  <h5 className="fw-bold text-orange">{event.title}</h5>
                  <p className="mb-1"><i className="bi bi-calendar-event me-2 text-danger"></i>{event.date}</p>
                  <p className="mb-1"><i className="bi bi-clock me-2 text-primary"></i>{event.time}</p>
                  <p className="mb-2"><i className="bi bi-geo-alt me-2 text-success"></i>{event.location}</p>
                  <p className="text-muted">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
