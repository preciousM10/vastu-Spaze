import aboutImage from "../assets/assets/about.webp"

const About = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 mt-20" id="about">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase
        mb-12 mx-4">About</h2>
        <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">
            <div className="mb-8 lg:mb-0">
                <img src={aboutImage}alt="About VastuSpaze"
                className="w-full h-auto" />
            </div>
            <p className="text-lg lg:text-3xl font-light text-center
            lg:text-left max-w-5xl mx-auto mt-8">
                At VastuSpace, we believe in transforming houses in to dream homes,
                with a passion for design and commitmment to quality, our team
                of skilled professionals has been dedicated to delivering exceptional
                renovation sevices for over a decade.we specialize in creating beautiful functional spaces
                that reflect our client unique taste and lifestyles.
                From modern kitchen and luxirious bathroom to serene
                outdoor living areas and cozy home offices, we brind our enterprise ton every project,ensuring
                each renovation is tailored to meet your specific need and
                desires. our mission is to enhance the beauty and functionality 
                of your home, making it a place where you can truly thrive.
            </p>
        </div>
    </section>
  )
}

export default About