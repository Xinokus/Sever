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
import upload from './img/upload.png'
import calendar from './img/calendar.png'

import Item from '../item/item'
import { ProductInfo } from '../../product/productInfo.js'
import { useEffect, useState } from 'react'

export default function Order({id, pfp, name, phoneNumber}){
    const [dropDownState, setDropDownState] = useState(false)
    const [dropDownOption, setDropDownOption] = useState(0)
    const [changeTimePopupState, setChangeTimePopupState] = useState(false)
    const [chatPopupState, setChatPopupState] = useState(false)
    const [deliveryTime, setDeliveryTime] = useState('14:00')
    const [deliveryDay, setDeliveryDay] = useState(8)
    const [showFullOrderState, setShowFullOrderState] = useState(false)
    const [chatButtonState, setChatButtonState] = useState(true)
    const [scheduleButtonState, setScheduleButtonState] = useState(false)

    function ShowFullOrder(){
        setShowFullOrderState(true)
    }

    useEffect(()=>{
        CheckOrderState()
    })

    function CheckOrderState(){
        switch(dropDownOption){
            case 0:
                setChatButtonState(false)
                setScheduleButtonState(true)
                break;
            case 1:
                setChatButtonState(false)
                setScheduleButtonState(true)
                break;
            case 2:
                setChatButtonState(true)
                setScheduleButtonState(false)
                break;
            case 3:
                setChatButtonState(true)
                setScheduleButtonState(false)
                break;
            case 4:
                setChatButtonState(true)
                setScheduleButtonState(false)
                break;
            case 5:
                setChatButtonState(true)
                setScheduleButtonState(false)
                break;
            case 6:
                setChatButtonState(true)
                setScheduleButtonState(false)
                break;
        }
    }

    function SetBorderToInput(input){
        document.getElementById(input).style.border = '1px solid #70C05B'
    }
    function RemoveBorderFromInput(input){
        document.getElementById(input).style.border = '1px solid #BFBFBF'
    }

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
                        <button type="button" onClick={ShowFullOrder} style={showFullOrderState ? {backgroundColor: '#FF6633', color: 'white'} : null}><img src={showFullOrderState ? upload : eye} alt="" /><p>{showFullOrderState ? 'Выгрузить в 1с' : 'Просмотреть заказ'}</p></button>
                    </div>
                    <div className={classes.chat} onClick={scheduleButtonState ? ()=>setChangeTimePopupState(true) : ()=>setChatPopupState(true)}>
                        <img src={chat} alt="" style={chatButtonState ? null : {display: 'none'}}/>
                        <img src={calendar} alt="" style={scheduleButtonState ? null : {display: 'none'}}/>
                    </div>
                </div>
            </div>
            <div style={showFullOrderState ? {display: 'flex'} : {display: 'none'}} className={classes.items}>
                <Item
                image={ProductInfo[0].img}
                amount={4}
                square={40}
                category={'Снеки'}
                name={'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»'}
                />
                <Item
                image={ProductInfo[0].img}
                amount={4}
                square={40}
                category={'Снеки'}
                name={'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»'}
                />
                <Item
                image={ProductInfo[0].img}
                amount={4}
                square={40}
                category={'Снеки'}
                name={'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»'}
                />
                <Item
                image={ProductInfo[0].img}
                amount={4}
                square={40}
                category={'Снеки'}
                name={'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»'}
                />
            </div>

            <div style={changeTimePopupState && scheduleButtonState ? {display: 'flex'} : {display: 'none'}} className={classes.change_day_popup}>
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
                            <p className={classes.non_interactable}>28</p>
                            <p className={classes.non_interactable}>29</p>
                            <p className={classes.non_interactable}>30</p>
                            <p onClick={()=>setDeliveryDay(1)}>1</p>
                            <p onClick={()=>setDeliveryDay(2)}>2</p>
                            <p onClick={()=>setDeliveryDay(3)}>3</p>
                            <p onClick={()=>setDeliveryDay(4)}>4</p>
                        </div>
                        <div className={classes.day_line}>
                            <p onClick={()=>setDeliveryDay(5)}>5</p>
                            <p onClick={()=>setDeliveryDay(6)}>6</p>
                            <p onClick={()=>setDeliveryDay(7)}>7</p>
                            <p onClick={()=>setDeliveryDay(8)}>8</p>
                            <p onClick={()=>setDeliveryDay(9)}>9</p>
                            <p onClick={()=>setDeliveryDay(10)}>10</p>
                            <p onClick={()=>setDeliveryDay(11)}>11</p>
                        </div>
                        <div className={classes.day_line}>
                            <p onClick={()=>setDeliveryDay(12)}>12</p>
                            <p onClick={()=>setDeliveryDay(13)}>13</p>
                            <p onClick={()=>setDeliveryDay(14)}>14</p>
                            <p onClick={()=>setDeliveryDay(15)}>15</p>
                            <p onClick={()=>setDeliveryDay(16)}>16</p>
                            <p onClick={()=>setDeliveryDay(17)}>17</p>
                            <p onClick={()=>setDeliveryDay(18)}>18</p>
                        </div>
                        <div className={classes.day_line}>
                            <p onClick={()=>setDeliveryDay(19)}>19</p>
                            <p onClick={()=>setDeliveryDay(20)}>20</p>
                            <p onClick={()=>setDeliveryDay(21)}>21</p>
                            <p onClick={()=>setDeliveryDay(22)}>22</p>
                            <p onClick={()=>setDeliveryDay(23)}>23</p>
                            <p onClick={()=>setDeliveryDay(24)}>24</p>
                            <p onClick={()=>setDeliveryDay(25)}>25</p>
                        </div>
                        <div className={classes.day_line}>
                            <p onClick={()=>setDeliveryDay(26)}>26</p>
                            <p onClick={()=>setDeliveryDay(27)}>27</p>
                            <p onClick={()=>setDeliveryDay(28)}>28</p>
                            <p onClick={()=>setDeliveryDay(29)}>29</p>
                            <p onClick={()=>setDeliveryDay(30)}>30</p>
                            <p onClick={()=>setDeliveryDay(31)}>31</p>
                            <p className={classes.non_interactable}>1</p>
                        </div>
                    </div>
                    <div className={classes.time_pick}>
                        <div className={classes.row}>
                            <div onClick={()=>setDeliveryTime('11:00')} className={deliveryTime == '11:00' ? `${classes.time} ${classes.active}` : classes.time}>
                                <p>11:00</p>
                            </div>
                            <div onClick={()=>setDeliveryTime('14:00')} className={deliveryTime == '14:00' ? `${classes.time} ${classes.active}` : classes.time}>
                                <p>14:00</p>
                            </div>
                        </div>
                        <div className={classes.row}>
                            <div onClick={()=>setDeliveryTime('18:00')} className={deliveryTime == '18:00' ? `${classes.time} ${classes.active}` : classes.time}>
                                <p>18:00</p>
                            </div>
                            <div onClick={()=>setDeliveryTime('20:00')} className={deliveryTime == '20:00' ? `${classes.time} ${classes.active}` : classes.time}>
                                <p>20:00</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.picked_time}>
                        <p>{deliveryDay} апреля 2021</p>
                        <p>{deliveryTime}</p>
                    </div>
                    <div className={classes.confirm}>
                        <button onClick={()=>setChangeTimePopupState(false)} type="button"><img src={white_check} alt="" /><p>Подтвердить</p></button>
                    </div>
                </div>
            </div>

            <div className={classes.chat_popup} style={chatPopupState ? {visibility: 'visible'} : {visibility: 'hidden'}}>
                <div className={classes.chat_window}>
                    <div className={classes.close}>
                        <button type="button" onClick={()=>setChatPopupState(false)}><img src={x} alt="" /></button>
                    </div>
                    <div className={classes.comment_section}>
                        <div className={classes.title}>
                            <p>Комментарии</p>
                        </div>
                        <div className={classes.comments}>
                            <div className={classes.comment}>
                                <p>Дмитрий (курьер) 21.01.2021</p>
                                <div>
                                    <p>У клиента были гнилые половина помидоров. Он сказал возьмет их. Надо возместить бонусами.</p>
                                </div>
                            </div>
                            <div className={classes.comment}>
                                <p>Аня (менеджер) 22.02.2021</p>
                                <div>
                                    <p>Созвонились с клиентом. Я начислила 50 балов.</p>
                                </div>
                            </div>
                            <div className={classes.input}>
                                <textarea name="comment" id="comment"
                                onBlur={() => RemoveBorderFromInput('comment')} 
                                onFocus={() => SetBorderToInput('comment')}
                                ></textarea>
                            </div>
                        </div>
                        <div className={classes.send}>
                            <button type="button"><p>Отправить</p></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}