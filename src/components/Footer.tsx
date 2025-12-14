const Footer = () => {
  return (
    <footer className="border-t border-border/60 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col items-center justify-center text-sm text-muted-foreground">
        <p className="text-center">
          © {new Date().getFullYear()} AWS Polly Text-to-Speech. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
