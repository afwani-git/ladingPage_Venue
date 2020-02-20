import React from 'react';
import Mybutton from '../utils/Mybutton';
import Zoom from 'react-reveal/Zoom';

const Boxes = ({ prices, positions, desc, linkto, delayAmimation }) => (
    <Zoom delay={delayAmimation}>
    <div className="pricing_item">
      <div className="pricing_inner_wrapper">
          <div className="pricing_title">
              <span>${prices}</span>
              <span>{positions}</span>
          </div>
          <div className="pricing_description">
              {desc}
          </div>
          <div className="pricing_buttons">
              <Mybutton
                  text="Purchase"
                  bg="#ffa800"
                  size="small"
                  color="#ffffff"
                  link={linkto}
              />
          </div>
      </div>
    </div>
  </Zoom>
)

export default Boxes;