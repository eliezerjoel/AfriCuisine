import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-5xl'>
      <Navbar />
      <Hero />
      
<body class="text-gray-600">
    <div class="grid md:grid-cols-3 "><!--content wraper-->
        <div class="col-span-1 md:flex md:justify-end">
            <nav class="text-right">
                <div>
                    <h1 class="font-bold text-green-600 sm:text-red-500 uppercase border-b border-gray-200 p-4"><a
                           class="hover:text-gray-700" href="">Food Ninja</a></h1>
                </div>
                <ul class="text-sm mt-6 ">
                    <li class="font-bold text-gray-900">
                        <a class="flex justify-end px-4 border-r-4 border-primary" href="">
                            <span>Home</span>
                            <svg class="w-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                              </svg>
                              
                        </a>
                    </li>
                    <li>
                        <a class="flex justify-end px-4 border-r-4 border-white" href="">
                            <span>About</span>
                            <svg class="w-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                              </svg>
                              
                        </a>
                    </li>
                    <li>
                        <a class="flex justify-end px-4 border-r-4 border-white" href="">
                            <span class="">Contact</span>
                            <svg class="w-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                              </svg>
                              
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        {/* <!--end nav--> */}
        <main class="px-16 md:col-span-2 bg-gray-100 py-6">
            <div class="flex justify-center md:justify-end">
                <a class="text-primary  border-primary md:border-2 btn hover:bg-primary hover:text-white transition ease-in duration-500" href="#">Login</a>
                <a class="text-red-400 border-primary md:border-2 ml-3 btn hover:bg-primary hover:text-white transition ease-out duration-500" href="#">Signup</a>
            </div>

            <header>
                <h2 class="text-gray-900 text-6xl font-semibold">Recipes</h2>
                <h3 class="text-2xl">For ninjas</h3>
            </header>
            <div>
                <h4 class="font-semibold mt-12 pb-2 border-b border-red-400">Latest Recipes</h4>
                <div class="mt-8 grid lg:grid-cols-3 gap-3">
                    {/* <!--cards go here--> */}
                    <div class="card">
                        <img src="images/images.jpg" class="w-full h-32 sm:h-48 object-cover" alt="">
                        <div class="m-4">
                            <span class="font-bold">5 Bean Chilli Stew</span>
                            <span class="block text-gray-500 text-sm ">Recipe by mario</span>
                        </div>
                        <div class="badge">
                            <svg class="w-4 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <span>
                                25 mins
                            </span>
                        </div>
                    </div>
                    <div class="card">
                        <img src="images/images.jpg" class="w-full h-32 sm:h-48 object-cover" alt="">
                        <div class="m-4">
                            <span class="font-bold">5 Bean Chilli Stew</span>
                            <span class="block text-gray-500 text-sm ">Recipe by mario</span>
                        </div>
                        <div class="badge"><span>
                                25 mins
                            </span></div>
                    </div>
                    <div class="card">
                        <img src="images/images.jpg" class="w-full h-32 sm:h-48 object-cover" alt="">
                        <div class="m-4">
                            <span class="font-bold">5 Bean Chilli Stew</span>
                            <span class="block text-gray-500 text-sm ">Recipe by mario</span>
                        </div>
                        <div class="badge"><span>
                                25 mins
                            </span></div>
                    </div>
                </div>
                <h4 class="font-bold font-serif mt-12 pb-2 border-b border-red-400">Most popular</h4>
                <div class="mt-8">
                    {/* <!--cards go here--> */}
                </div>
            </div>
            <div class="flex justify-center">
                <div class="bg-primary hover:shadow-inner btn text-secondary-100 transform hover:scale-95 hover:bg-opacity-50 transition ease-out duration-300  ">
                    Load more
                </div>
            </div>
        </main>
    </div>


    <div class="flex items-end">
        <div class="bg-red-500 h-4 w-6"></div>
        <div class="bg-blue-500 h-8 w-6"></div>
        <div class="bg-green-500 h-12 w-6"></div>
    </div>
</body>
    </div>
  )
}

export default App
