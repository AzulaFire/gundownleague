import soccer from '@/public/images/soccer.jpg';
import football from '@/public/images/football.jpg';
import Image from 'next/image';
import { FaFootballBall } from 'react-icons/fa';
import { PiSoccerBallFill } from 'react-icons/pi';

const Modes = ({ japanese }) => {
  if (japanese) {
    return (
      <section
        id='Modes'
        className='w-full bg-cyan-900 bg-gradient-to-b from-black to-none text-white lg:text-justify leading-8 text-xl px-10 py-20'
      >
        <h1 className='lg:text-4xl mb-8 mx-6 text-3xl'>
          ユニークな{' '}
          <span className='text-lime-500 font-bold font-montserrat pb-4'>
            モード
          </span>
        </h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 px-10 bg-plays'>
          <div>
            <Image
              src={football}
              alt='Football Mode'
              width={500}
              height={290}
              className='mx-auto mb-16'
            />
            <span className='text-lime-400 text-2xl font-bold font-montserrat flex flex-row items-center'>
              ブリッツボールバトル
              <FaFootballBall className='ml-6 text-4xl' />
            </span>
            <p className='mb-4 mt-4'>
              FPSとスポーツの究極の融合を「ブリッツボールバトル」で体験しよう！ユニークなスポーツスタジアムを舞台に、5vs5のスリリングな試合を繰り広げよう。試合は50ヤードラインでキックオフされ、両チームはそれぞれのエンドゾーンからスタート。破壊可能なバリアに隠れながらチームメイトにボールを渡しますが、チームメイトがボールを持つまではミッドフィールドを越えることはできません。
            </p>
            <p className='mb-4 mt-4'>
              ただし、チームメイトがボールを持つまではミッドフィールドを越えることはできない。選手が負傷退場して5秒間プレーできなくなるとパワープレーとなり、相手チームに戦略的優位を与える。タッチダウンを決めてフィールドゴールを狙い、得点を最大化しよう。戦略的能力とチームシナジーを駆使して、相手を圧倒しよう。武器は3種類から選べる：速射アサルトライフル、強力だが制限のあるショットガン、致命的なスナイパーライフル。
            </p>
            <p className='mb-4 mt-4'>
              ブリッツボール・バトルでは、10分間の試合が一瞬一瞬を争います。パス、シュート、ディフェンス、そして攻撃と、このハイテンションなアクション満載のモードでチームを勝利に導こう。
            </p>
          </div>
          <div>
            <Image
              src={soccer}
              alt='Soccer Mode'
              width={500}
              height={290}
              className='mx-auto mb-16'
            />
            <span className='text-lime-400 text-2xl font-bold font-montserrat flex flex-row items-center'>
              ストライクボール
              <PiSoccerBallFill className='ml-6 text-4xl' />
            </span>
            <p className='mb-4 mt-4'>
              FPSの迫力とサッカーのスリルが融合したStrikeballの世界に飛び込もう！ユニークなスポーツスタジアムを舞台にした5対5の試合でバトルを繰り広げよう。試合は50ヤードラインから始まり、チームはそれぞれのエンドゾーンからスタートします。ただし、中盤を越えることができるのは、チームメイトがボールを持っているときだけであることをお忘れなく。
            </p>
            <p className='mb-4 mt-4'>
              ボールを奪われた選手は5秒間動けなくなり、相手チームにパワープレーのチャンスを与える。戦略的にライバルを出し抜き、相手ゴールキーパーに対応しながらゴールを目指そう。武器は、発射速度の速いアサルトライフル、強力だが制限のあるショットガン、一撃必殺のスナイパーライフルの3種類から選べる。
            </p>
            <p className='mb-4 mt-4'>
              10分間の試合では、1秒1秒が勝負。パス、シュート、ディフェンス、そして攻撃でチームを勝利に導こう。ストライクボールでアクションと戦略の究極の融合を体験しよう！
            </p>
          </div>
        </div>
        <div className='flex flex-row justify-center lg:text-4xl text-3xl text-lime-400 font-montserrat font-bold mt-4'>
          近日中に他のモードも追加される予定だ...
        </div>
      </section>
    );
  } else {
    return (
      <section
        id='Modes'
        className='w-full bg-cyan-900 bg-gradient-to-b from-black to-none text-white lg:text-justify leading-8 text-xl px-10 py-20'
      >
        <h1 className='lg:text-4xl mb-8 mx-6 text-3xl'>
          Unique{' '}
          <span className='text-lime-500 font-bold font-montserrat pb-4'>
            Modes
          </span>
        </h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 px-10 bg-plays'>
          <div>
            <Image
              src={football}
              alt='Football Mode'
              width={500}
              height={290}
              className='mx-auto mb-16'
            />
            <span className='text-lime-400 text-2xl font-bold font-montserrat flex flex-row items-center'>
              Blitzball Battle
              <FaFootballBall className='ml-6 text-4xl' />
            </span>
            <p className='mb-4 mt-4'>
              Experience the ultimate fusion of FPS and sports in Blitzball
              Battle! Engage in thrilling 5v5 matches set in unique sports
              stadiums, each brimming with rambunctious crowds and live
              play-by-play commentary. The game kicks off at the 50-yard line
              with both teams starting from their respective end zones. Pass the
              ball to teammates while taking cover behind breakable barriers,
              but remember, you can&apos;t cross midfield until a teammate has
              the ball.
            </p>
            <p className='mb-4 mt-4'>
              When a player is sidelined for 5 seconds after being taken out, it
              creates a power play, giving the opposing team a strategic edge.
              Score touchdowns to earn a field goal attempt and maximize your
              points. Use your strategic abilities and team synergy to
              outmaneuver your opponents. Choose from three types of weapons:
              the rapid-fire assault rifle, the powerful but limited shotgun, or
              the deadly sniper rifle.
            </p>
            <p className='mb-4 mt-4'>
              With 10-minute matches, every moment counts in Blitzball Battle.
              Pass, shoot, defend, and go on the offensive to lead your team to
              victory in this high-octane, action-packed mode.
            </p>
          </div>
          <div>
            <Image
              src={soccer}
              alt='Soccer Mode'
              width={500}
              height={290}
              className='mx-auto mb-16'
            />
            <span className='text-lime-400 text-2xl font-bold font-montserrat flex flex-row items-center'>
              Strikeball
              <PiSoccerBallFill className='ml-6 text-4xl' />
            </span>
            <p className='mb-4 mt-4'>
              Dive into the electrifying world of Strikeball, where FPS
              intensity meets the thrill of soccer! Battle it out in 5v5 matches
              set in unique sports stadiums, each with rambunctious crowds and
              live play-by-play commentary. The game begins at the 50-yard line
              with teams starting from their respective end zones. Kick the ball
              to teammates while utilizing breakable barriers for cover, but
              remember, crossing midfield is only allowed when a teammate has
              possession of the ball.
            </p>
            <p className='mb-4 mt-4'>
              Players who are taken out are sidelined for 5 seconds, creating a
              power play opportunity for the opposing team. Strategize to
              outmaneuver your rivals, aiming to score goals while dealing with
              the opposing goalie. Choose from three weapon types: the
              fast-firing assault rifle, the powerful but limited shotgun, or
              the deadly sniper rifle with its one-shot head kills.
            </p>
            <p className='mb-4 mt-4'>
              In this 10-minute match, every second counts. Pass, shoot, defend,
              and go on the offensive to lead your team to victory. Experience
              the ultimate blend of action and strategy in Strikeball!
            </p>
          </div>
        </div>
        <div className='flex flex-row justify-center lg:text-4xl text-3xl text-lime-400 font-montserrat font-bold mt-4'>
          More modes coming soon ...
        </div>
      </section>
    );
  }
};
export default Modes;
