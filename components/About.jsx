const About = ({ japanese }) => {
  if (japanese) {
    return (
      <section
        id='About'
        className='w-full bg-black text-white text-justify leading-8 text-xl px-10 pt-20'
      >
        <h1 className='lg:text-4xl my-4 lg:mx-6 text-3xl'>
          大リーグへ{' '}
          <span className='text-lime-500 font-bold font-montserrat pb-4'>
            ようこそ！
          </span>
        </h1>
        <p className='mb-4 mt-4'>
          ガンダウンリーグは、FPS（ファーストパーソンシューティング）の迫力感と、サッカーやフットボールといった人気スポーツの興奮を融合させた革新的なゲームです。このゲームはチームベースのハイペースなアクションを導入し、プレイヤーはそれぞれ特殊な能力と役割を持った個性豊かなキャラクターから選択することができます。テンポの速いゲームプレイは、伝統的なスポーツフィールドの要素と近未来的な戦闘ゾーンを融合させたダイナミックなアリーナを舞台に繰り広げられ、戦略的なチームワークと個人のスキルが等しく報われる爽快な体験を生み出します。
        </p>
        <p className='mb-4 mt-4'>
          カスタマイズは『Gun Down
          League』の重要な特徴で、プレイヤーは自分のプレイスタイルに合わせてキャラクターやギアをカスタマイズできる。チームは、サッカーのような試合でゴールを狙ったり、アメフトにインスパイアされたバトルでタッチダウンを達成したりと、能力や戦術を調整しなければならない。このゲームでは協力プレイと対戦の両方が重視されており、どの試合も激しいアクションと戦略的な奥深さに満ちている。ガン・ダウン・リーグ」はFPSというジャンルに新風を吹き込み、スポーツマンシップと戦闘のスリリングなミックスを提供します。
        </p>
        <h3 className='text-2xl my-4 mx-6 text-cyan-400 font-bold font-montserrat pt-4'>
          ゲームは <span className='underline'>決して同じで</span> は{' '}
          <span className='italic'>ありません</span>！
        </h3>
      </section>
    );
  } else {
    return (
      <section
        id='About'
        className='w-full bg-black text-white text-justify leading-8 text-xl px-10 pt-20'
      >
        <h1 className='lg:text-4xl my-4 lg:mx-6 text-3xl'>
          Welcome to the{' '}
          <span className='text-lime-500 font-bold font-montserrat pb-4'>
            Big Leagues!
          </span>
        </h1>
        <p className='mb-4 mt-4'>
          Gun Down League is an innovative fusion of first-person shooter (FPS)
          dynamics with the excitement of popular sports like football and
          soccer. This game breaks new ground by introducing team-based,
          high-paced action where players can choose from a diverse roster of
          unique characters, each with their own special abilities and roles.
          The fast-paced gameplay is set in dynamic arenas that blend elements
          of traditional sports fields with futuristic combat zones, creating an
          exhilarating experience where strategic teamwork and individual skill
          are equally rewarded.
        </p>
        <p className='mb-4 mt-4'>
          Customization is a key feature in Gun Down League, allowing players to
          personalize their characters and gear to fit their playstyle. Teams
          must coordinate their abilities and tactics, whether they&apos;re
          shooting goals in a soccer-like match or achieving touchdowns in
          football-inspired battles. The game emphasizes both cooperative
          gameplay and competitive edge, ensuring that every match is filled
          with intense action and strategic depth. Gun Down League brings a
          fresh twist to the FPS genre, offering a thrilling mix of
          sportsmanship and combat that is sure to captivate gamers seeking
          something truly unique.
        </p>
        <h3 className='text-2xl my-4 mx-6 text-cyan-400 font-bold font-montserrat pt-4'>
          The Game will <span className='underline'>NEVER</span> be the{' '}
          <span className='italic'>Same</span>!
        </h3>
      </section>
    );
  }
};
export default About;
