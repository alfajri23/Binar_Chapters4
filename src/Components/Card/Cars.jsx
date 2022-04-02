import React from 'react'
import { Link } from "react-router-dom";
import { BsPeople } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { FaRegCalendar } from 'react-icons/fa';
const Cars = (props) => {
  return (
    <div>
        <div key="{e.no}" className="card my-3" style={{width: `20rem`}}>
              <span className="p-4">
                  <img src={props.image} className="card-img-top" alt="..."/>
              </span>
              <div className="card-body">
                  <p className="card-text">{props.name}/{props.category}</p>
                  <h5 className="card-title fw-bold mb-3">Rp. {props.price} / hari</h5>
                  <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facilis deleniti molestiae beatae neque ea atque, qui expedita molestias quasi?</p>
                  <p className="card-text mb-1 fw-light">
                      <BsPeople/> 4 orang
                      {/* { e.start  } - { e.finish  } */}
                  </p>
                  <p className="card-text mb-0 fw-light">
                      <FiSettings/> Manual
                      {/* Updated at { e.update  } */}
                  </p>
                  <p className="card-text mb-0 fw-light">
                      <FaRegCalendar/> Tahun 2020
                      {/* Updated at { e.update  } */}
                  </p>

                  <div className="row mt-4 px-3">
                        <Link to={`detail/${props.id}`} className="btn btn-success w-100">
                            <i className="fa-solid fa-square-pen"></i>
                            Pilih mobil
                        </Link>
                  </div>

              </div>
          </div>
    </div>
  )
}

export default Cars