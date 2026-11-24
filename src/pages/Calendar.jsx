import CoverArt from '../components/CoverArt'

const Calendar = () => {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end' }}>
      <CoverArt mood='CALM' size={44} />
      <CoverArt mood='FLUTTER' size={76} radius={10} />
      <CoverArt mood='EXCITED' size={150} radius={16} />
      <CoverArt mood='FOCUS' size={200} radius={16} />
      <CoverArt mood='GLOOMY' size={200} radius={16} lp={false} />
    </div>
  )
}

export default Calendar