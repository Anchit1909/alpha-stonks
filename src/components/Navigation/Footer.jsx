function Footer() {
  return (
    <footer className="h-16 inset-x-0 top-0 z-30 w-full mt-4 backdrop-blur-lg transition-all">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
        <div className="flex justify-center">
          <p className="text-muted-foreground font-poppins text-sm md:text-base">
            © 2023{" "}
            <span className="text-primary bg-clip-text font-semibold">
              Anchit Sinha.
            </span>{" "}
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
