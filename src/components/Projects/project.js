import React from 'react';
import image from '../../assets/image.png';
import skills from '../../assets/portfolio-4.png';
import project from '../../assets/Project.png';

const Project = () => {
    return (
        <section id="project">
            <div className="row text-justify">
                <div className="card col-3 m-5 border border-dark p-3" style={{ height: '600px' }}>
                    <img src={image} alt="img" className="img-fluid" style={{ height: '100%' ,width:'120%'}} />
                    <div className="card-body">
                        <h3 className="card-title centered text-black">M.Pavan Kumar Reddy<br/>Vit-Ap University</h3>
                        <p className="card-text">I love doing coding and reading  books,manga and watching movies,anime </p>
                        <hr/>
                    </div>
                </div>
                <div className="card col-3 m-5 border border-dark p-3" style={{ height: '600px' }}>
                    <img src={skills} alt="img" className="img-fluid" style={{ height: '70%' }} />  
                    <div className="card-body">
                    <div className="languages row">
                               <div className="language col-4"><span>Python</span></div>
                               <div className="language col-4"><span> ★★★★★</span></div>
                     </div>
                     <div className="languages row">
                               <div className="language col-4"><span>Java</span></div>
                               <div className="language col-4"><span> ★★★★</span></div>
                     </div>
                     <div className="languages row">
                               <div className="language col-4"><span>Sql</span></div>
                               <div className="language col-4"><span> ★★★</span></div>
                     </div> 
                     <div className="languages row">
                               <div className="language col-4"><span>Html</span></div>
                               <div className="language col-4"><span> ★★★★★</span></div>
                     </div>
                     <div className="languages row">
                               <div className="language col-4"><span>c++</span></div>
                               <div className="language col-4"><span> ★★★★★</span></div>
                     </div>
                    </div>
                </div>
                <div className="card col-3 m-5 border border-dark p-3" style={{ height: '600px' }}>
                  <img src={project} alt="img" className="img-fluid" style={{ height: '70%' }} />
                  <div className="card-body">
                   <ul>
                       <li>Stock Price Prediction Using Recurrent Neural Networks (RNN)</li>
                       <li>Prevention of Railway Accident using Arduino Based Safety System</li>
                       <li>Research Paper on Criminal Investigation and Privacy in India</li>
                      </ul>
                       </div>
                </div>
            </div>
        </section>

    )
}

export default Project;
