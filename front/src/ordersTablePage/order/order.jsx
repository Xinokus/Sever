import classes from './order.module.scss'

import phone from '../img/phone.png'
import chat from '../img/chat.png'
import eye from '../img/eye.png'

import alert_circle from './img/alert-circle.png'
import alert_triangle from './img/alert-triangle.png'
import bag from './img/bag.png'
import check_circle from './img/check-circle.png'
import check from './img/check.png'
import delivery from './img/delivery.png'
import home from './img/home.png'

import drop_down from './img/drop-down.png'
import drop_up from './img/drop-up.png'

import left from './img/left.png'
import right from './img/right.png'
import x from './img/x.png'
import white_check from './img/white_check.png'

import { useState } from 'react'

export default function Order({id, pfp, name, phoneNumber}){
    const [dropDownState, setDropDownState] = useState(false)
    const [dropDownOption, setDropDownOption] = useState(0)
    const [changeTimePopupState, setChangeTimePopupState] = useState(false)

    return(
        <>
            <div className={classes.order}>
                <div className={classes.person_info}>
                    <div className={classes.order_id}>
                        <p>{id}</p>
                    </div>
                    <div className={classes.person}>
                        <img src={pfp} alt="" />
                        <p>{name}</p>
                    </div>
                </div>
                <div className={classes.order_info}>
                    <div className={classes.phone}>
                        <img src={phone} alt="" />
                        <p>+{phoneNumber}</p>
                    </div>
                    <div className={classes.status} onClick={dropDownState ? ()=>setDropDownState(false) : ()=>setDropDownState(true)}>
                        <div style={dropDownOption == 0 ? {visibility: 'visible'} : {visibility: 'hidden'}} className={`${classes.option} ${classes.new}`}><img src={bag} alt="" /><p>Новый</p><img src={drop_down} alt="" /></div>
                        <div style={dropDownOption == 1 ? {visibility: 'visible'} : {visibility: 'hidden'}} className={`${classes.option} ${classes.collected}`}><img src={check} alt="" /><p>Собран</p><img src={drop_down} alt="" /></div>
                        <div style={dropDownOption == 2 ? {visibility: 'visible'} : {visibility: 'hidden'}} className={`${classes.option} ${classes.delivering}`}><img src={delivery} alt="" /><p>Доставляется</p><img src={drop_down} alt="" /></div>
                        <div style={dropDownOption == 3 ? {visibility: 'visible'} : {visibility: 'hidden'}} className={`${classes.option} ${classes.confirmed}`}><img src={check_circle} alt="" /><p>Подтверждён</p><img src={drop_down} alt="" /></div>
                        <div style={dropDownOption == 4 ? {visibility: 'visible'} : {visibility: 'hidden'}} className={`${classes.option} ${classes.unconfirmed}`}><img src={alert_circle} alt="" /><p>Не подтвердили</p><img src={drop_down} alt="" /></div>
                        <div style={dropDownOption == 5 ? {visibility: 'visible'} : {visibility: 'hidden'}} className={`${classes.option} ${classes.return}`}><img src={alert_triangle} alt="" /><p>Возврат</p><img src={drop_down} alt="" /></div>
                        <div style={dropDownOption == 6 ? {visibility: 'visible'} : {visibility: 'hidden'}} className={`${classes.option} ${classes.returned}`}><img src={home} alt="" /><p>Вернули</p><img src={drop_down} alt="" /></div>
                        <div className={classes.drop_down_menu} style={dropDownState ? {visibility: 'visible'} : {visibility: 'hidden'}}>
                            <div className={`${classes.option} ${classes.new}`} onClick={()=>setDropDownOption(0)}><img src={bag} alt="" /><p>Новый</p><img src={drop_up} alt="" /></div>
                            <div className={`${classes.option} ${classes.collected}`} onClick={()=>setDropDownOption(1)}><img src={check} alt="" /><p>Собран</p></div>
                            <div className={`${classes.option} ${classes.delivering}`} onClick={()=>setDropDownOption(2)}><img src={delivery} alt="" /><p>Доставляется</p></div>
                            <div className={`${classes.option} ${classes.confirmed}`} onClick={()=>setDropDownOption(3)}><img src={check_circle} alt="" /><p>Подтверждён</p></div>
                            <div className={`${classes.option} ${classes.unconfirmed}`} onClick={()=>setDropDownOption(4)}><img src={alert_circle} alt="" /><p>Не подтвердили</p></div>
                            <div className={`${classes.option} ${classes.return}`} onClick={()=>setDropDownOption(5)}><img src={alert_triangle} alt="" /><p>Возврат</p></div>
                            <div className={`${classes.option} ${classes.returned}`} onClick={()=>setDropDownOption(6)}><img src={home} alt="" /><p>Вернули</p></div>
                        </div>
                    </div>
                    <div className={classes.show_order}>
                        <button type="button"><img src={eye} alt="" /><p>Просмотреть заказ</p></button>
                    </div>
                    <div className={classes.chat} onClick={()=>setChangeTimePopupState(true)}>
                        <img src={chat} alt="" />
                    </div>
                </div>
            </div>

            <div style={changeTimePopupState ? {display: 'flex'} : {display: 'none'}} className={classes.change_day_popup}>
                <div className={classes.title}>
                    <p>Изменить время</p>
                    <button type="button" onClick={()=>setChangeTimePopupState(false)}><img src={x} alt="" /></button>
                </div>
                <div className={classes.change_day}>
                    <div className={classes.month_pick}>
                        <div className={classes.month}>
                            <p>Апрель 2021</p>
                        </div>
                        <div className={classes.left_or_right}>
                            <button type="button"><img src={left} alt="" /></button>
                            <button type="button"><img src={right} alt="" /></button>
                        </div>
                    </div>
                    <div className={classes.day_pick}>
                        <div className={classes.day_name}>
                            <p>Пн</p>
                            <p>Вт</p>
                            <p>Ср</p>
                            <p>Чт</p>
                            <p>Пт</p>
                            <p>Сб</p>
                            <p>Вс</p>
                        </div>
                        <div className={classes.day_line}>
                            <p>28</p>
                            <p>29</p>
                            <p>30</p>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                        </div>
                        <div className={classes.day_line}>
                            <p>5</p>
                            <p>6</p>
                            <p>7</p>
                            <p>8</p>
                            <p>9</p>
                            <p>10</p>
                            <p>11</p>
                        </div>
                        <div className={classes.day_line}>
                            <p>12</p>
                            <p>13</p>
                            <p>14</p>
                            <p>15</p>
                            <p>16</p>
                            <p>17</p>
                            <p>18</p>
                        </div>
                        <div className={classes.day_line}>
                            <p>19</p>
                            <p>20</p>
                            <p>21</p>
                            <p>22</p>
                            <p>23</p>
                            <p>24</p>
                            <p>25</p>
                        </div>
                        <div className={classes.day_line}>
                            <p>26</p>
                            <p>27</p>
                            <p>28</p>
                            <p>29</p>
                            <p>30</p>
                            <p>31</p>
                            <p>1</p>
                        </div>
                    </div>
                    <div className={classes.time_pick}>
                        <div className={classes.row}>
                            <div className={classes.time}>
                                <p>11:00</p>
                            </div>
                            <div className={`${classes.time} ${classes.active}`}>
                                <p>14:00</p>
                            </div>
                        </div>
                        <div className={classes.row}>
                            <div className={classes.time}>
                                <p>18:00</p>
                            </div>
                            <div className={classes.time}>
                                <p>20:00</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.picked_time}>
                        <p>8 апреля 2021</p>
                        <p>14:00</p>
                    </div>
                    <div className={classes.confirm}>
                        <button type="button"><img src={white_check} alt="" /><p>Подтвердить</p></button>
                    </div>
                </div>
            </div>
        </>
    )
}