import './experience.css';

const Experience = (props) => {

    const history = props.history.map(item => {
        console.log(item.employmentHistory.jobs[0])
        return(
            <div key={item.employmentHistory.id}>
                <h2 className='mb-5 text-center experience-heading about-content-heading'>{item.employmentHistory.title}</h2>
                <div className='row'>
                   
                        {item.employmentHistory.jobs.map(job => {
                            return(
                                <div key={job.id} className='d-flex justify-content-center'>
                                <div  className='experience-holder d-flex justify-content-start col-md-6 mb-5'>
                                    <div className='constant-holder'>
                                        <h3 className='job-title mb-3 variable'> <span className='const'>const </span>{job.alias} </h3>
                                    </div>
                                        <span className='equal variable'>{'='}</span>
                                   <div>
                                        <p className='brackets'>{'{'}</p>
                                        <p className='job-object job-position'><span className='object-key'>companyName:</span> <span className='object-properties'>{job.company}</span>,</p>
                                        <p className='job-object job-position'><span className='object-key'>jobPosition:</span> <span className='object-properties'>{job.position}</span>,</p>
                                        <p className='job-object job-date'><span className='object-key'>date:</span> <span className='object-properties'>{job.date}</span></p>
                                        <p className='brackets'>{'}'}</p>
                                    </div>
                                </div>
                                </div>
                            );
                        })}
                    
                </div>
            </div>
        );
    })

    return(
       <div className="experience-section section">
            {history}
       </div>
    );
}

export default Experience;