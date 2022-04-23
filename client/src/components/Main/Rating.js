import React from "react";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai"

export default function Rating ( { node, isZero } ) {
 
    return (
        <div>
            {isZero ? <AiOutlineStar /> : 
            <p className="rating" key={node.id}><AiTwotoneStar />{`(${Math.round(node.rating)})`}</p>
        }
        </div>
    )
}
