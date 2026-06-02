export default function Toast({ show, message }) {
  if (!show) return null;
  
  return (
    <div style={{position: 'fixed', bottom: '30px', right: '30px', background: 'rgba(82, 39, 255, 0.9)', border: '1px solid rgba(159, 122, 234, 0.5)', borderRadius: '8px', padding: '16px 24px', color: '#ffffff', fontFamily: 'var(--font-inter)', fontSize: '14px', zIndex: 1000, animation: 'slideIn 0.3s ease-out', backdropFilter: 'blur(10px)'}}>
      {message}
    </div>
  )
}
