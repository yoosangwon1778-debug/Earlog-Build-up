import { Plus, Pencil, Trash2 } from 'lucide-react'
import CoverArt from '../components/CoverArt'
import Button from '../components/Button'

const Calendar = () => {
  return (
    <div>
    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end' }}>
      <CoverArt mood='CALM' size={44} />
      <CoverArt mood='FLUTTER' size={76} radius={10} />
      <CoverArt mood='EXCITED' size={150} radius={16} />
      <CoverArt mood='FOCUS' size={200} radius={16} />
      <CoverArt mood='GLOOMY' size={200} radius={16} lp={false} />
    </div>
      <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
        <Button><Plus size={18} /> 오늘의 노래 기록하기</Button>
        <Button variant='secondary' to='/timeline'>어제 기록 보기</Button>
        <Button variant='secondary'><Pencil size={16} /> 수정</Button>
        <Button variant='danger-outline'><Trash2 size={16} /> 삭제</Button>
        <Button variant='danger'>삭제</Button>
        <Button variant='kakao'>카카오 로그인</Button>
      </div>

      <div style={{ width: 400, marginTop: 16 }}>
        <Button full>로그인</Button>
      </div>
    </div>
  )
}

export default Calendar