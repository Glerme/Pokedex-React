import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

const NotFound: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>404 - Page Not Found | Pokedex</title>
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="relative w-64 h-64 mx-auto mb-8">
            <Image
              src="/images/pokemon-placeholder.png"
              alt="Missing Pokemon"
              width={256}
              height={256}
              className="object-contain opacity-50 animate-float"
              priority
            />
            <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent animate-pulse" />
          </div>

          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-white">404</h1>
            <h2 className="text-2xl font-medium text-white/90">
              A Wild Error Has Appeared!
            </h2>
            <p className="text-lg text-white/70">
              The page you're looking for has fled into the tall grass.
            </p>
          </div>

          <div className="pt-8">
            <button
              onClick={() => router.push("/")}
              className="btn-primary group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 transform transition-transform group-hover:-translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                />
              </svg>
              <span>Return to Home</span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
