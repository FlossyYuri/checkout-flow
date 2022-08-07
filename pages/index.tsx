import Image from 'next/image';
import YouTube, { YouTubeProps } from 'react-youtube';
import CompraSeguraImage from '../assets/image/comprasegura.png';
import Example1Image from '../assets/image/cricut/rsz_1-min.png';
import Example2Image from '../assets/image/cricut/rsz_2-min.png';
import CricutImage from '../assets/image/cricut/topo.png';
import EntidadeIcon from '../assets/image/entidade.png';
import MugsImage from '../assets/image/exemplos/mugs.jpg';
import PrintImage from '../assets/image/exemplos/printandcut.jpg';
import TopperImage from '../assets/image/exemplos/topper.jpg';
import MpesaIcon from '../assets/image/mpesa.png';
import Ponto24Icon from '../assets/image/ponto-24.png';
import SeloImage from '../assets/image/selo.png';
import TransferIcon from '../assets/image/transfer.png';
import VisaIcon from '../assets/image/visa.png';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import MetaPixel from '../components/MetaPixel';
import OrderButton from '../components/OrderButton';
import Review from '../components/Review';

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
        <h1 className='text-cricut-green text-xl sm:text-2xl font-semibold text-center py-4 px-4'>
          Fature a partir de <span className='font-bold'>4.000,00MT</span> por
          semana <br className='hidden sm:block' />
          Trabalhando com personalizados
        </h1>
      </div>
      <section className='container mx-auto text-center py-4 mb-8 px-4 flex flex-col items-center'>
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
      <section className='w-full bg-cricut-green py-24 px-4 text-center clip-right'>
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
      <section className='w-full py-4 px-4'>
        <div className='container flex flex-col items-center mx-auto'>
          <h2 className='text-3xl text-cricut-green text-center font-semibold mb-8'>
            O que você
            <span className='bg-cricut-green text-white'> pode fazer </span> com
            a maquina
          </h2>
          <div>
            <Image src={Example1Image} alt='Cricut explore air 2 image' />
          </div>
          <div>
            <Image src={Example2Image} alt='Cricut explore air 2 image' />
          </div>
        </div>
      </section>
      <section className='w-full bg-cricut-green py-24 px-4 text-center clip-right'>
        <h2 className='text-3xl text-white font-semibold mb-8'>
          QUEM COMPROU, <br className='block sm:hidden' />
          <span className='bg-white text-cricut-green'>NÃO SE ARREPENDEU!</span>
        </h2>
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <Review
            title='A minha filha amou!'
            name='Nicole Domingos'
            description='Adorei isso. Chegou a tempo em ótimas condições. Foi fácil de configurar e aprender a usar. Minha filha e eu fizemos topos de bolo no mesmo dia do recebimento. Muito fácil.'
            image={TopperImage}
          />
          <Review
            title='A Cricut é maravilhosa'
            name='Victor Uamusse'
            description='A maquina foi entregue dentro do prazo, e é exatamente como eu esperava. Acabamos de começar a usar o produto, e até agora tem sido espetacular! Conseguimos usar o programa tanto no celular como no laptop de forma simples.'
            image={PrintImage}
          />
          <Review
            title='Divertido para pessoas criativas'
            name='Marcia Boaventura'
            description='Divertido de usar. Ótimo para personalizar itens simples. Use-o muito para projetos de festas e rótulos.'
            image={MugsImage}
          />
        </div>
      </section>
      <section className='w-full py-16 px-4'>
        <h2 className='text-3xl font-semibold'>
          Ganhe um <span className='text-cricut-green'>Bonus Especial</span> de{' '}
          <span className='text-cricut-green'>Garantia</span> da Cricut
        </h2>
      </section>
      <section className='w-full py-16 px-4'>
        <div className='container mx-auto'>
          <section className='grid gap-4 grid-cols-1 sm:grid-cols-2'>
            <article>
              <p className='mb-4 text-gray-400 text-lg font-light tracking-wide'>
                Risco zero para você!
              </p>
              <h2 className='text-3xl font-semibold'>
                <span className='text-cricut-green'>1 ano </span> de{' '}
                <span className='text-cricut-green'>Garantia</span> da Cricut
              </h2>
              <div className='h-1 w-1/5 my-4 bg-cricut-green rounded clip-right'></div>
              <p>
                Ainda não tem certeza? Não se preocupe. <br /> 1 ano de garantia
                com total cobertura pela Assistência <br /> Técnica da Cricut
                para caso tenha algum problema com a maquina. <br />
                Caso a maquina tenha algum defeito de fábrica, nós trocamos para
                você sem nenhum custo adicional e muita burocracia.
              </p>
            </article>
            <article className='flex justify-center'>
              <div className='w-1/2 '>
                <Image src={SeloImage} alt='Cricut explore air 2 image' />
              </div>
            </article>
          </section>
        </div>
      </section>
      <section className='w-full bg-cricut-green py-24 px-4 text-center clip-top-left'>
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
      <FAQ />
      <Footer />
      <MetaPixel />
    </main>
  );
};

export default CheckoutPage;
