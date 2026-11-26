import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import logo from '../assets/logo.svg'
import CoverArt from '../components/CoverArt'
import { MOODS } from '../constants/moods'
import Chip from '../components/Chip'
import { Lock } from 'lucide-react'
import './Landing.css'
const PREVIEW_DAYS = [
    'CALM', 'FLUTTER', null, 'EXCITED', null, null, 'CALM',
    'FOCUS', null, 'GLOOMY', null, null, 'CALM', 'FLUTTER',
    null, 'CALM', 'EXCITED', 'FOCUS', 'CALM', null, null,
]
const TODAY = 20
const FEATURE_GENRES = [
    { label: '댄스', key: 'dance' },
    { label: '발라드', key: 'ballad' },
    { label: '인디', key: 'indie' },
]

const Landing = () => {
    return (
        <div className='landing'>
            <header className='landing-header'>
                <div className='landing-inner landing-header-inner'>
                    <Link to='/'>
                        <img src={logo} alt='Earlog' className='landing-logo' />
                    </Link>
                    <nav className='landing-header-menu'>
                        <a href='#features'>기능</a>
                        <a href='#report'>월간 리포트</a>
                    </nav>
                    <div className='landing-header-actions'>
                        <Link to='/login' className='landing-login'>로그인</Link>
                        <Button variant='invert' to='/signup'>무료로 시작하기</Button>
                    </div>
                </div>
            </header>
            <section className="landing-hero">
                <div className='landing-inner landing-hero-inner'>
                    <div className="landing-hero-text">
                        <h1>오늘의 한 곡으로<br />쌓이는 나만의<br />음악 다이어리</h1>
                        <p className="landing-hero-desc">그날 들은 노래와 장면을 날짜에 남기고, 가수별·장르별로 다시 꺼내 봐요.</p>
                        <div className="landing-hero-btns">
                            <Button to='/signup'>무료로 시작하기</Button>
                            <Button variant='secondary' to='/login'>로그인하기</Button>
                        </div>
                        <p className="landing-hero-note">내 기록은 나만 볼 수 있어요. 카카오 계정으로 바로 가입할 수 있어요.</p>
                    </div>
                    <div className="landing-preview">
                        <div className="preview-today">
                            <CoverArt mood='CALM' size={72} radius={12} lp={false} />
                            <div className="preview-today-text">
                                <span className="preview-label">어제의 한 곡</span>
                                <strong className="preview-title">밤편지</strong>
                                <span className="preview-artist">아이유</span>
                            </div>
                            <Button to='/write'>+ 오늘 기록</Button>
                        </div>
                        <div className="preview-month">
                            <span className="preview-month-num">2026. 11</span>
                            <span className="preview-month-count">12곡 기록</span>
                        </div>
                        <div className="preview-grid">
                            {PREVIEW_DAYS.map((mood, i) => {
                                const day = i + 1
                                const moodInfo = MOODS.find((m) => m.id === mood)
                                const style = moodInfo
                                    ? { background: `linear-gradient(135deg, ${moodInfo.a}, ${moodInfo.b})` } : {}
                                return (
                                    <span
                                        key={day}
                                        className={`preview-day${moodInfo ? ' is-filled' : ''}${day === TODAY ? ' is-today' : ''}`}
                                        style={style}
                                    >{day}</span>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <section className="landing-features" id='features'>
                <div className="landing-inner features-inner">
                    <div className="section-head">
                        <h2 className="section-title">듣고, 남기고,<br />다시 꺼내 보는 노래들</h2>
                        <p className="section-desc">하루 한 곡만 남기면 나머지는 Earlog가 정리해요.</p>
                    </div>
                    <div className="feature-grid">
                        <article className="feature-card">
                            <div className="feature-visual visual-song">
                                <CoverArt mood="EXCITED" size={96} radius={14} lp={false} />
                                <div className="visual-song-text">
                                    <strong className="visual-song-title">Hype Boy</strong>
                                    <span className="visual-song-artist">NewJeans</span>
                                    <Chip variant='mood' mood='EXCITED' />
                                </div>
                            </div>
                            <div className="feature-text">
                                <h3>하루 한 곡 기록</h3>
                                <p>사진 한 장, 곡명과 가수, 그날의 분위기만 고르면 끝이에요.</p>
                            </div>
                        </article>
                        <article className="feature-card">
                            <div className="feature-visual visual-calendar">
                                {PREVIEW_DAYS.map((mood, i) => {
                                    const moodInfo = MOODS.find((m) => m.id === mood)
                                    const style = moodInfo
                                        ? { background: `linear-gradient(135deg, ${moodInfo.a}, ${moodInfo.b})` }
                                        : {}
                                    return <span key={i} className="visual-calendar-day" style={style}></span>
                                })}
                            </div>
                            <div className="feature-text">
                                <h3>달력으로 한눈에</h3>
                                <p>기록한 날은 분위기 색 커버로 채워져요. 타임라인으로 이어서 볼 수도 있어요.</p>
                            </div>
                        </article>
                        <article className="feature-card">
                            <div className="feature-visual visual-genre">
                                {FEATURE_GENRES.map((genre) => (
                                    <span
                                        key={genre.key}
                                        className="visual-genre-tile"
                                        style={{ background: `linear-gradient(135deg, var(--genre-${genre.key}-a), var(--genre-${genre.key}-b))` }}
                                    >
                                        {genre.label}
                                    </span>
                                ))}

                            </div>
                            <div className="feature-text">
                                <h3>가수별, 장르별 보관함</h3>
                                <p>발라드, 댄스, 인디… 국내·일본·해외로도 나눠서 모아 봐요.</p>
                            </div>
                        </article>
                        <article className="feature-card is-dark">
                            <div className="feature-visual visual-lock">
                                <span className="visual-lock-circle">
                                    <Lock size={40} strokeWidth={1.8} />
                                </span>
                            </div>
                            <div className="feature-text">
                                <h3>나만 보는 다이어리</h3>
                                <p>내 기록은 로그인한 나만 봐요. 다른 사람에게 공개되지 않아요.</p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Landing
