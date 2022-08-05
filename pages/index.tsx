import Image from 'next/image';
import YouTube, { YouTubeProps } from 'react-youtube';
import CricutImage from '../assets/image/cricut/topo.png';
import CricutAbertaImage from '../assets/image/cricut/maquinaaberta.png';
import CompraSeguraImage from '../assets/image/comprasegura.png';
import MpesaIcon from '../assets/image/mpesa.png';
import Ponto24Icon from '../assets/image/ponto-24.png';
import VisaIcon from '../assets/image/visa.png';
import TransferIcon from '../assets/image/transfer.png';
import EntidadeIcon from '../assets/image/entidade.png';
import OrderButton from '../components/OrderButton';
import Collapsible from 'react-collapsible';

const CheckoutPage = () => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps['opts'] = {
    frameborder: 0,
    height: '360',
    width: '640',
    allow: 'accelerometer; autoplay; encrypted-media; gyroscope;',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      modestbranding: 1,
      showinfo: 0,
      rel: 0,
    },
  };

  return (
    <main className='w-full flex flex-col items-stretch min-h-screen'>
      <div className=' bg-cricut-gray'>
        <h1 className='text-cricut-green text-xl sm:text-2xl font-semibold text-center py-4 px-2'>
          Fature a partir de <span className='font-bold'>4.000,00MT</span> por
          semana <br className='hidden sm:block' />
          Trabalhando com personalizados
        </h1>
      </div>
      <section className='container mx-auto text-center py-4 mb-8 px-2 flex flex-col items-center'>
        <h2 className='text-xl sm:text-3xl'>
          "Papelaria personalizada Revela a{' '}
          <span className='text-cricut-green font-semibold'>
            maquina de corte
          </span>{' '}
          automática"
        </h2>
        <p className='text-sm sm:text-2xl mt-2 hidden sm:block'>
          Faça artigos personalizados para sua festa ou <br /> para vender e
          faturar muito com a <br />
          <span className='text-cricut-green font-semibold'>
            Cricut Explore Air 2
          </span>
        </p>
        <span className='text-cricut-green font-semibold text-2xl mt-2 sm:hidden'>
          Cricut Explore Air 2
        </span>
        <YouTube
          className='my-4 video-container border-8 border-cricut-green rounded-lg'
          iframeClassName='video'
          videoId='ysQ1Xvm6m-0'
          opts={opts}
          onReady={onPlayerReady}
        />
        <p className='text-xl mb-2'>
          Restam apenas 2 maquinas em stock prontas para entrega.
          <br />
          Clique aqui ⬇️⬇️⬇️
        </p>
        <OrderButton />
      </section>
      <section className='w-full bg-cricut-green py-24 px-2 text-center clip-right'>
        <div className='container flex flex-col items-center mx-auto'>
          <h2 className='text-3xl text-white font-semibold'>
            A Cricut Explore Air 2
          </h2>
          <p className='text-xl text-white max-w-xl mt-4 mb-2'>
            Corta mais de 100 materiais, desde{' '}
            <span className='underline'>cartolina</span>,{' '}
            <span className='underline'>papel EVA</span>,{' '}
            <span className='underline'>vinil adesivo</span>,{' '}
            <span className='underline'>vinil para camisetas</span> e mais
            materiais de até 1,7mm de espessura com precisão!
          </p>
          <div className='max-w-md'>
            <Image src={CricutImage} alt='Cricut explore air 2 image' />
          </div>
        </div>
      </section>
      <section className='w-full py-4 px-2'>
        <div className='container flex flex-col items-center mx-auto'>
          <h2 className='text-3xl text-cricut-green text-center font-semibold'>
            O que você pode fazer com a maquina
          </h2>
          <div className='max-w-md'>
            <Image src={CricutAbertaImage} alt='Cricut explore air 2 image' />
          </div>
          <section className='grid grid-cols-4 gap-4 text-center'>
            <article className='bg-cricut-green bg-opacity-50 rounded-xl p-4'>
              <div className='w-full'>
                <Image
                  src={CricutAbertaImage}
                  alt='Cricut explore air 2 image'
                />
              </div>
              <h3 className='font-semibold text-white text-xl'>Corte</h3>
              <p></p>
            </article>
          </section>
        </div>
      </section>
      <section className='w-full bg-cricut-green py-24 px-2 text-center clip-top-left'>
        <div className='container flex flex-col items-center mx-auto'>
          <h2 className='text-3xl text-white font-semibold tracking-wide leading-normal'>
            OFERTA <span className='bg-white text-cricut-green'>ESPECIAL</span>{' '}
            <br />
            POR{' '}
            <span className='bg-white text-cricut-green'>TEMPO LIMITADO</span>
          </h2>
          {/* <p className='text-xl text-white max-w-xl mt-4 mb-2'></p> */}
          <div className='my-4'>
            <p className='text-xl font-semibold text-white  line-through'>
              <span className='text-base'>antes </span>45.000,00MT
            </p>
            <p className='text-3xl font-semibold text-white'>
              <span className='text-base'>depois </span>34.999,00MT
            </p>
          </div>
          <div className='max-w-md'>
            <Image src={CricutImage} alt='Cricut explore air 2 image' />
          </div>
          <p className='text-3xl mb-4'>⬇️⬇️⬇️</p>
          <OrderButton inverted />
          <div className='max-w-xs mt-8'>
            <Image className='w-full' src={CompraSeguraImage} alt='' />
          </div>
          <div className='flex gap-8 justify-center mt-4'>
            <Image
              className='object-contain'
              width={100}
              height={40}
              src={MpesaIcon}
              alt='Mpesa Logo'
            />
            <Image
              className='object-contain'
              width={100}
              height={40}
              src={Ponto24Icon}
              alt='Mpesa Logo'
            />
            <Image
              className='object-contain'
              width={100}
              height={40}
              src={VisaIcon}
              alt='Mpesa Logo'
            />
            <Image
              className='object-contain'
              width={100}
              height={40}
              src={TransferIcon}
              alt='Mpesa Logo'
            />
            <Image
              className='object-contain'
              width={100}
              height={40}
              src={EntidadeIcon}
              alt='Mpesa Logo'
            />
          </div>
        </div>
      </section>
      <section className='w-full py-16 px-2'>
        <div className='container flex flex-col items-center mx-auto'>
          <h2 className='text-3xl text-cricut-green text-center font-semibold'>
            Perguntas frequentes
          </h2>
          <section className='flex flex-col gap-4 mt-4'>
            <Collapsible trigger='Start here'>
              <p>
                This is the collapsible content. It can be any element or React
                component you like.
              </p>
            </Collapsible>
            <Collapsible trigger='Start here'>
              <p>
                This is the collapsible content. It can be any element or React
                component you like.
              </p>
            </Collapsible>
          </section>
        </div>
      </section>
      <footer className='py-8 text-center bg-cricut-green bg-opacity-50'>
        <div className='flex'></div>
        <p>© Print Flow - Todos os Direitos Reservados.</p>
      </footer>
    </main>
  );
};

export default CheckoutPage;
