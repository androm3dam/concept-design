import React from 'react'
import Empty from '../elements/Empty'
import {motion} from 'framer-motion'
function ProjectImage(props){

return(
      <>
            <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <motion.div whileHover={{}}>
                  <div className="hover-bg" onClick={()=>{
                      props.setIndex(props.index);
                      props.setIsOpen(true);
                  }}>
                    <div className="hover-text">
                    </div>
                    <img src={require(`../../assets/images/${props.folder}${props.index+1}.jpg`)} className="img-responsive" alt=""/> </div>
                </motion.div>
                </div>
              </div>
      </>
)

}
export default ProjectImage