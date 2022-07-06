import Image from 'next/image';
import CreditCard from '../assets/icons/CreditCard';
import MpesaIcon from '../assets/image/mpesa.png';
import PaypalIcon from '../assets/image/paypal.png';
import VisaIcon from '../assets/image/visa.png';
import SafePaymentsIcon from '../assets/image/compra-segura.webp';
import WarrantyIcon from '../assets/image/garantia.png';

const IndexPage = () => (
  <div className='w-full flex flex-col items-stretch min-h-screen'>
    <header className='bg-red-500 pt-10 pb-32 flex justify-center items-center flex-col fill-white text-white px-8'>
      <div className='w-12 mb-4'>
        <CreditCard />
      </div>
      <h1 className='text-xl font-extrabold tracking-wide uppercase'>
        Finalizar Comprar
      </h1>
      <p className='mt-4 max-w-lg text-center'>
        Preencha os campos abaixo como completar seu pedido. Este site é seguro
        com criptografia 256bit
      </p>
    </header>
    <main className='max-w-4xl bg-white mx-4 flex-1 self-center rounded-xl p-8 shadow-custom -mt-20'>
      <div className='flex gap-8 justify-center'>
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
          src={PaypalIcon}
          alt='Mpesa Logo'
        />
        <Image
          className='object-contain'
          width={100}
          height={40}
          src={VisaIcon}
          alt='Mpesa Logo'
        />
      </div>
      <div className='grid grid-cols-2 gap-4 mt-4'>
        <section>
          <h2>Detalhes de Faturamento</h2>
          <form>
            <input
              className='p-2 border w-full'
              type='text'
              placeholder='Nome Completo'
            />
            <input
              className='p-2 border w-full'
              type='text'
              placeholder='Numero de celular'
            />
            <input
              className='p-2 border w-full'
              type='email'
              placeholder='Endereço de email'
            />
            <input
              className='p-2 border w-full'
              type='email'
              placeholder='Confirmação de endereço de email'
            />
          </form>
        </section>
        <section>
          <h2>Seu Pedido</h2>
          <p>Produto - Subtotal</p>
          <p>Total: 500MT</p>
          <div className='flex gap-4'>
            <input
              className='p-2 border w-full'
              type='email'
              placeholder='Cupom dde desconto'
            />
            <button
              type='button'
              className='px-8 py-2 bg-red-500 text-white rounded'
            >
              Aplicar
            </button>
          </div>
          <h2>Escolher método de pagamento</h2>
          <button
            type='button'
            className='px-8 py-2 bg-red-500 text-white rounded'
          >
            Finalizar Compra
          </button>
        </section>
      </div>
    </main>
    <footer className='grid grid-cols-1 md:grid-cols-2 mt-8 gap-4 bg-gray-200 p-8'>
      <div className='flex justify-center md:justify-end'>
        <Image
          className='object-contain'
          src={SafePaymentsIcon}
          height={100}
          width={200}
          alt='Safe payments icon'
        />
      </div>
      <div className='flex flex-col items-center md:flex-row text-center md:text-left flex-1'>
        <Image
          className='object-contain'
          src={WarrantyIcon}
          height={100}
          width={200}
          alt='Warranty Badge'
        />
        <div className='flex flex-col'>
          <p className='text-red-500 font-bold'>100% Livre de Risco</p>
          <p className='md:max-w-sm'>
            se houver qualquer problema com o produto ou não ficar satisfeito(a)
            <strong> devolveremos TODO seu dinheiro!</strong>
          </p>
        </div>
      </div>
    </footer>
  </div>
);

export default IndexPage;
