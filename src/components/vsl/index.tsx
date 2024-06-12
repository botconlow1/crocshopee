import React, { useRef, useEffect, useState } from 'react'
import { VslContent } from './styles'

export function Vsl() {
  const meuIframeRef = useRef<HTMLIFrameElement>(null)
  const [iframeHeight, setIframeHeight] = useState('')

  // Função para ajustar a altura do iframe com base na largura
  const ajustarAltura = () => {
    if (meuIframeRef.current) {
      const width = meuIframeRef.current.clientWidth // Obter a largura do iframe
      const scaleFactor = 0.56267 // Fator de escala de 10%, você pode ajustar conforme necessário
      const newHeight = `${width * scaleFactor}px` // Calcula a nova altura em pixels
      setIframeHeight(newHeight) // Define a nova altura para o estado
    }
  }

  // Chamando a função ajustarAltura quando o componente for renderizado e toda vez que o tamanho da janela mudar
  useEffect(() => {
    ajustarAltura()
    const handleResize = () => ajustarAltura()
    window.addEventListener('resize', handleResize)

    // Remover o listener quando o componente for desmontado para evitar memory leaks
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <VslContent>
      <iframe
        ref={meuIframeRef}
        id="ifr_65af118a5a68c1000982c45d"
        src="https://scripts.converteai.net/36581e86-3fe7-44d1-89e4-c5eb502798e8/players/65af118a5a68c1000982c45d/embed.html"
        allowFullScreen={false}
        style={{
          height: iframeHeight,
          border: 'none',
        }}
      />
    </VslContent>
  )
}
