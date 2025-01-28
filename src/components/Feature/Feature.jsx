import PropTypes from 'prop-types'
import { BsArrowRightCircleFill } from "react-icons/bs";

const Feature = ({feature}) => {
    const {name, description} = feature
    return (
        <div className="bg-blue-900 p-5 rounded-3xl">
            <h2 className='text-3xl font-bold'>{name}</h2>
            <ul className='mt-3 space-y-2'>
                {description.map((item, index) => 
                <div key={index} className='flex items-center gap-2'>
                    <BsArrowRightCircleFill />
                    <li >{item}</li>
                </div>)}
            </ul>
            <button className='btn btn-primary mt-5 rounded-full font-bold'>Join Now</button>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.object.isRequired
}

export default Feature;