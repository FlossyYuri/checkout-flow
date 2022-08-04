import YouTube, { YouTubeProps } from 'react-youtube';

const CheckoutPage = () => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps['opts'] = {
    height: '390',
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
    <div className='w-full flex flex-col items-stretch min-h-screen'>
      <div className=' bg-cricut-gray'>
        <h1 className='text-cricut-green text-2xl font-semibold text-center p-4'>
          Fature a partir de <span className='font-bold'>4.000,00MT</span> por
          semana <br />
          Trabalhando com personalizados
        </h1>
      </div>
      <section className='container mx-auto text-center py-4 flex flex-col items-center'>
        <h2 className='text-3xl'>
          "Papelaria personalizada Revela a{' '}
          <span className='text-cricut-green font-semibold'>
            maquina de corte
          </span>{' '}
          automática"
        </h2>
        <p className='text-2xl mt-2'>
          Faça artigos personalizados para sua festa ou <br /> para vender e
          faturar muito com a <br />
          <span className='text-cricut-green font-semibold'>
            Cricut Explore Air 2
          </span>
        </p>
        <YouTube
          className='mt-8'
          videoId='ysQ1Xvm6m-0'
          opts={opts}
          onReady={onPlayerReady}
        />
      </section>
    </div>
  );
};

export default CheckoutPage;
