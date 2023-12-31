import NIBMGSALogo from '@assets/images/logo-m.svg';
import NIBMLogo from '@assets/images/nibm-logo.png';
import Image from 'next/image';

export const Clients = () => (
  <>
    <p className="mb-12 text-center text-lg text-white md:text-xl">
      <span className="text-gray-300">POWERING GREAT MINDS</span>
      <br className="hidden md:block" /> From aspiring students to successful
      professionals.
    </p>
    <div className="flex flex-wrap items-center justify-center gap-x-15 gap-y-8 [&_svg]:max-w-[16rem] [&_svg]:basis-[calc(50%-12px)] md:[&_svg]:basis-[calc(16.66%-20px)]">
      {/* <RampLogo />
      <LoomLogo className="hidden md:block" /> */}
      {/* <VercelLogo /> */}
      <Image src={NIBMLogo} alt="nibm-logo" className="w-[30%]" />
      <Image src={NIBMGSALogo} alt="nibmgsa-logo" className="w-[30%]" />
      {/* <DescriptLogo className="hidden md:block" />
      <CashAppLogo />
      <RaycastLogo />
      <MercuryLogo />
      <RetoolLogo />
      <AlanLogo className="hidden md:block" />
      <ArcLogo className="hidden md:block" />
      <OpenSeaLogo className="hidden md:block" />
      <PitchLogo className="hidden md:block" /> */}
    </div>
  </>
);
