import { Link, NavLink } from 'react-router-dom'
import { Plus, Calendar, List, User, CircleDot } from 'lucide-react'
import logo from '../assets/logo.svg'
import './Sidebar.css'


const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <Link to='/calendar' className='sidebar-logo'>
        <img src={logo} alt='Earlog' />
      </Link>
      <Link to='/write' className='sidebar-write'>
        <Plus size={18} /> 기록 쓰기
      </Link>

      <nav className="sidebar-nav">
        <p className="sidebar-label">내 기록</p>
      <ul>
        <li><NavLink to='/calendar'><Calendar size={18} />달력</NavLink></li>
        <li><NavLink to='/timeline'><List size={18} />타임라인</NavLink></li>
      </ul>

      <p className="sidebar-label">보관함</p>
      <ul>
        <li><NavLink to='/artists'><User size={18} />가수별</NavLink></li>
        <li><NavLink to='/genres'><CircleDot size={18} />장르별</NavLink></li>
      </ul>
      </nav>
    </aside>
  )
}

export default Sidebar