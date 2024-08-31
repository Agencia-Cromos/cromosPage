import { StyleHeaderContainer } from './StyleHeaderContainer'
import { TiThMenu } from 'react-icons/ti'
import { FaTimes } from 'react-icons/fa'
import { Menu } from '../../menu/Menu'


interface IPropsHeader {
    openMenu: boolean,
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export function HeaderContainer({ openMenu, setOpenMenu }: IPropsHeader) {

    const menuEvents = () =>{
        if(openMenu){
            setOpenMenu(false)
        }else(
            setOpenMenu(true)
        )
    }

    return(
        <StyleHeaderContainer>
            <div className='containerMain'>
                <h2>Natã</h2>
                <div onClick={menuEvents} className='menuIcon'>
                    { !openMenu ? <TiThMenu/> : <FaTimes/>}
                </div>
                <div className='containerMenu'> <Menu setOpenMenu={setOpenMenu} /></div>
            </div>
        </StyleHeaderContainer>
    )
}