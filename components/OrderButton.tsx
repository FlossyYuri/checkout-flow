interface Props {
  inverted?: boolean;
}

const OrderButton = ({ inverted = false }: Props) => (
  <button
    className={`${
      inverted
        ? 'bg-white  text-cricut-green inverted'
        : 'bg-cricut-green text-white'
    } rounded-xl py-2 px-4 w-full sm:w-max flex flex-col`}
  >
    <span className='uppercase font-semibold'>
      Eu quero encomendar uma maquina
    </span>
    <span className='text-sm'>Entrega de 3 a 7 dias</span>
  </button>
);

export default OrderButton;
