import Navbar from "@/components/site/navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Navbar />
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="absolute inset-0 z-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#086_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#086_100%)]">
          <section className="z-auto">
            <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
              <a
                href="#"
                className="mb-7 inline-flex items-center justify-between rounded-full bg-gray-100 px-1 py-1 pr-4 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                target="_parent"
                rel="noreferrer"
              >
                <span className="bg-primary-600 mr-3 rounded-full px-4 py-1.5 text-xs text-foreground dark:text-white">
                  Novidades
                </span>{" "}
                <span className="text-sm font-medium">Iris inteligence</span>
                <svg
                  className="ml-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Logo"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                <span className="from-primary bg-gradient-to-r to-gray-600 bg-clip-text text-transparent dark:to-white">
                  Pronto para evoluir seu atendimento?
                </span>
              </h1>
              <p className="mb-8 text-lg font-normal text-gray-500 sm:px-16 lg:text-xl xl:px-48 dark:text-gray-400">
                Iris Intelligence uma empresa de inteligência artificial que busca revolucionar o atendimento ao
                cliente, com soluções inovadoras e personalizadas para suas necessidades.
              </p>
              <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16">
                <a
                  href="#"
                  className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 text-primary inline-flex items-center justify-center rounded-lg px-5 py-3 text-center font-medium focus:ring-4"
                  target="_parent"
                  rel="noreferrer"
                >
                  Saiba mais
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Saiba mais"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  target="_parent"
                  rel="noreferrer"
                >
                  <svg
                    className="-ml-1 mr-2 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Video de demonstração"
                  >
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                  Assista o vídeo
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
