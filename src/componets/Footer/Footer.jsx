import React from 'react';
import classes from './Footer.module.css';

const Footer = (props) => {


    return (
      <div className={classes.footerBlock}>
          <div className={classes.panelsSettingBlock}>
              <h4>Панель Настроек</h4>
              <ul>
                  <li>Служба поддержки</li>
                  <li>Настройки</li>
                  <li>Узнать больше</li>
              </ul>
          </div>
      </div>
    );
}

export default Footer;