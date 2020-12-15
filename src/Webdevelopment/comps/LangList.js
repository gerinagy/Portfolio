import React from 'react';
import Skill from './skills.json';
import { motion } from 'framer-motion';

export const LangList = () => {
  return (
    <div>
      {Skill.map((skillDetails, index) => {
        return (
          <div className="language-items">
            <div className="language-title">
              <p>{skillDetails.skill}</p>
            </div>
            <div className="language-percentage">
              <motion.div className="lang-progress"
                initial={{ width: 0 }}
                animate={{ width: skillDetails.percentage + '%' }}
                transition={{ duration: 1 }}
                style={{ animationDelay: "2s" }}
              >
                <p>{skillDetails.percentage}%</p>
              </motion.div>
            </div>
          </div>

        )

      })}

    </div>
  )
}
