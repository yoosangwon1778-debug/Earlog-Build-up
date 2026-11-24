import { Link, NavLink } from 'react-router-dom'
import { Plus, Calendar, List, User, CircleDot } from 'lucide-react'
import logo from '../assets/logo.svg'
import './Sidebar.css'
import { records } from '../data/records'
import CoverArt from './CoverArt'

const Sidebar = () => {
  const recent = [...records].sort((a,b)=>b.date.localeCompare(a.date))[0]
  const nickname = "리즈"
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

      <div className="sidebar-bottom">
      <Link to={`/records/${recent.date}`} className='recent-card'>
      <CoverArt mood={recent.mood} photoUrl={recent.photoUrl} size={44} lp={false} />
      <div>
        <p className="recent-label">최근 기록 · {recent.date.slice(5).replace('-','.')}</p>
        <p className="recent-song">{recent.song}</p>
        <p className="recent-artist">{recent.artist}</p>
      </div>
      </Link>

      <div className="profile-row">
        <Link to='/profile' className='profile-link'>
        <span className="profile-avatar">{nickname[0]}</span>
        <span className="profile-name">{nickname}님</span>
        </Link>
        <button type='button' className='logout-btn'>로그아웃</button>
      </div>
      </div>
    </aside>
  )
}

export default Sidebar