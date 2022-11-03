import React from 'react'
import "./Acordion.css"
export default function Acordion() {
  return (
    <>
<div className="Accordion text-center py-5">
    <div className="container">
        <h2>Do You Have <span>Questions</span>  ?</h2>
        <p className='pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, adipisci.</p>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
       What Is Responsive Design
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate veniam corporis nobis, facilis quia harum ad excepturi eligendi enim quo? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate veniam corporis nobis, facilis quia harum ad excepturi eligendi enim quo?
        </p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque neque repellat rem iusto neadipisicing elit. Doloremque neque repellat rem iusto nemo quaerat? Nam unde illo esse reiciendis!</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      What are latest ux development
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate veniam corporis nobis, facilis quia harum ad excepturi eligendi enim quo? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate veniam corporis nobis, facilis quia harum ad excepturi eligendi enim quo?
        </p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque neque repellat rem iusto neadipisicing elit. Doloremque neque repellat rem iusto nemo quaerat? Nam unde illo esse reiciendis!</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
       What things about social media will be discussed
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate veniam corporis nobis, facilis quia harum ad excepturi eligendi enim quo? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate veniam corporis nobis, facilis quia harum ad excepturi eligendi enim quo?
        </p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque neque repellat rem iusto neadipisicing elit. Doloremque neque repellat rem iusto nemo quaerat? Nam unde illo esse reiciendis!</p>
      </div>
    </div>
  </div>
</div>
    </div>
</div>
    </>
  )
}
