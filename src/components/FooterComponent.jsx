const FooterComponent = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="my-3  border-top">
      <p className="text-center fs-5 lead pt-4">
        All rights reserved. SAPPS .{date}
      </p>
    </footer>
  );
};

export default FooterComponent;
