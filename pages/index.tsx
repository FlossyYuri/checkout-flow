import Image from 'next/image';
import YouTube, { YouTubeProps } from 'react-youtube';
import MugsImage from '../assets/image/exemplos/mugs.jpg';
import PrintImage from '../assets/image/exemplos/printandcut.jpg';
import TopperImage from '../assets/image/exemplos/topper.jpg';
import Example1Image from '../assets/image/cricut/rsz_1-min.png';
import Example2Image from '../assets/image/cricut/rsz_2-min.png';
import CricutImage from '../assets/image/cricut/topo.png';
import SeloImage from '../assets/image/selo.png';
import CompraSeguraImage from '../assets/image/comprasegura.png';
import MpesaIcon from '../assets/image/mpesa.png';
import Ponto24Icon from '../assets/image/ponto-24.png';
import VisaIcon from '../assets/image/visa.png';
import TransferIcon from '../assets/image/transfer.png';
import Transfer2Icon from '../assets/image/transfer2.png';
import EntidadeIcon from '../assets/image/entidade.png';
import Entidade2Icon from '../assets/image/entidade2.png';
import OrderButton from '../components/OrderButton';
import Collapsible from 'react-collapsible';
import Review from '../components/Review';
import Pixel from '../components/Pixel';

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
      <section className='w-full py-16 px-4'>
        <div className='container flex flex-col items-center mx-auto'>
          <h2 className='text-3xl text-cricut-green text-center font-semibold'>
            Perguntas frequentes
          </h2>
          <section className='flex flex-col gap-4 mt-4'>
            <Collapsible
              trigger='COMO IREI RECEBER O PRODUTO?'
              contentInnerClassName='py-4 border-t-2 border-cricut-green border-opacity-50 '
            >
              <p>
                Geralmente você recebe a maquina em 2 dias após a confirmação do
                pagamento. A ENTREGA É GRATUITA (para Maputo e Matola), então
                você não precisa se preocupar com isso.
              </p>
              <p>
                <span className='font-semibold'>NOTA:</span> Em casos em que não
                temos a encomenda em stock, a encomenda leva de 3 a 7 dias para
                ser entregue a você mas sempre receberá atualizações pelo
                whatsapp sobre a entrega da maquina
              </p>
            </Collapsible>

            <Collapsible trigger='QUAIS SÃO AS FORMAS DE PAGAMENTO DISPONÍVEIS?'>
              <section className='grid grid-cols-1 sm:grid-cols-3 text-center border-t-2 border-cricut-green border-opacity-50 py-8 gap-4'>
                <article className='shadow-md rounded-xl p-2'>
                  <Image
                    className='object-contain'
                    height={44}
                    src={Entidade2Icon}
                    alt='Mpesa Logo'
                  />
                  <p className='mt-2'>Pagamento por Entidade e Referência</p>
                  <p>
                    <span className='text-cricut-green'>Entidade:</span>{' '}
                    <span className='underline'>99943</span>
                  </p>
                  <p>
                    <span className='text-cricut-green'>Referência:</span>{' '}
                    <span className='underline'>00050536575</span>
                  </p>
                </article>
                <article className='shadow-md rounded-xl p-2'>
                  <Image
                    className='object-contain'
                    height={64}
                    src={Transfer2Icon}
                    alt='Mpesa Logo'
                  />
                  <p className='mt-2'>Pagamento por transferência bancária</p>
                  <p>
                    <span className='text-cricut-green'>NIB:</span>{' '}
                    <span className='underline'>003400001016151810196</span>
                  </p>
                  <p>
                    <span className='text-cricut-green'>
                      Número de conta <span className='underline'>MOZA</span>:
                    </span>{' '}
                    <span className='underline'>00050536575</span>
                  </p>
                </article>
                <article className='shadow-md rounded-xl p-2'>
                  <Image
                    className='object-contain'
                    height={44}
                    src={MpesaIcon}
                    alt='Mpesa Logo'
                  />
                  <p className='mt-2'>M-Pesa</p>
                  <p>
                    <span className='text-cricut-green'>Número:</span>{' '}
                    <span className='underline'>851755378</span>
                  </p>
                  <p>
                    <span className='text-cricut-green'>Nome:</span>{' '}
                    <span className='underline'>EM****N C****E</span>
                  </p>
                </article>
                <article className='sm:col-span-3 font-semibold'>
                  <span className='text-cricut-green'>NOTA:</span> Após fazer o
                  pagamento, por favor Envie o comprovativo do pagamento via
                  WhatsApp ou e-mail.
                </article>
              </section>
            </Collapsible>
            <Collapsible
              trigger='ENTREGA PARA OUTRAS PROVÍNCIAS?'
              contentInnerClassName='py-4 border-t-2 border-cricut-green border-opacity-50 '
            >
              <p>
                Sim, nós entregamos o produto para qualquer ponto do país
                através do portador diário sobre custos adicionais. Consulte o
                nosso suporte para saber os custos{' '}
                <a
                  className='underline text-cricut-green'
                  href='tel:+258851755378'
                >
                  AQUI
                </a>
              </p>
            </Collapsible>
            <Collapsible
              trigger='NÃO SEI DESENHAR E NEM ENTENDO DE DESIGN, CONSIGO USAR A MÁQUINA?'
              contentInnerClassName='py-4 border-t-2 border-cricut-green border-opacity-50 '
            >
              <p>
                Sim! A software da maquina é muito simples de usar, tem alguns
                projetos prontos e você receberá uma lista de video aulas que
                vão te guiar a usar melhor a maquina. Além disso, a Print Flow
                ofereço uma aula gratis presencial.
              </p>
            </Collapsible>
            <Collapsible
              trigger='COMO FAÇO PARA COMPRAR ESSE PRODUTO? É SEGURO?'
              contentInnerClassName='py-4 border-t-2 border-cricut-green border-opacity-50 '
            >
              <p>
                Para realizar a compra basta clicar em qualquer botão verde
                desse site e efetuar os passos para o pagamento do produto e
                enviar o comprovativo. A empresa é totalmente confiável,
                trabalhando na área a mais de 2 anos.
              </p>
            </Collapsible>
          </section>
        </div>
      </section>
      <footer className='py-8 text-center bg-cricut-green bg-opacity-50 flex flex-col items-center text-white'>
        <div className='flex gap-8'>
          <span>Termos de uso aplicáveis</span>
          <span>Políticas de privacidade</span>
        </div>
        <p className='text-white'>
          © Print Flow - Todos os Direitos Reservados.
        </p>
      </footer>
      <Pixel name='FACEBOOK_PIXEL_1' />
    </main>
  );
};

export default CheckoutPage;
