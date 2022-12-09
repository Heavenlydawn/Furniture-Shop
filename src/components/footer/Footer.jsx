import ItemsContainer from "./itemsContainer";

const Footer = () => {
  return ( 
    <footer className="mt-20 mb-12 md:mt-48 md:mb-22">
    <div className="container mx-auto md:pr-12 md:pl-13 lg:pl-25 lg:pr-21">
      <hr className="h-0 w-full border border-solid border-gray mt-1.6 mb-12 lg:mb-20" />
      <ItemsContainer />
    </div>
    </footer>
  );
}

export default Footer;