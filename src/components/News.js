import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'

export default class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: 'Seeking Alpha',
      },
      author: 'Dane Bowler',
      title: '3 Simple Rules Of Inflation: Why ARK Innovation ETF Is Falling',
      description:
        'Inflation is here in a big way. ARKK is directly harmed by inflation. Certain other stocks are resistant or even helped by inflation.',
      url:
        'https://seekingalpha.com/article/4474671-3-simple-rules-of-inflation-why-ark-innovation-etf-is-falling',
      urlToImage:
        'https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1293478648/large_image_1293478648.jpg',
      publishedAt: '2021-12-11T02:30:35Z',
      content:
        'afsezen/iStock via Getty Images\r\nCPI based inflation hit 6.8% year over year change in November making it the biggest price increase since the rampant inflation of the 1980s. This might be a higher C… [+8216 chars]',
    },
    {
      source: {
        id: null,
        name: 'CleanTechnica',
      },
      author: 'Johnna Crider',
      title: 'NYC Is Planning To Buy Over $12 Million Worth Of Tesla Model 3s',
      description:
        'According to New York City records, the city that never sleeps will be holding a Contract Public Hearing on December 16, 2021, via conference call. The topic of the hearing is a proposed contract between the Department of Citywide Administrative Service of th…',
      url:
        'https://cleantechnica.com/2021/12/10/nyc-is-planning-to-buy-over-12-million-worth-of-tesla-model-3s/',
      urlToImage:
        'https://cleantechnica.com/files/2021/06/Tesla-Taxi-Brendan-Miles-CleanTechnica-e1625145620537.jpg',
      publishedAt: '2021-12-11T02:05:55Z',
      content:
        'According to New York City records, the city that never sleeps will be holding a Contract Public Hearing on December 16, 2021, via conference call. The topic of the hearing is a proposed contract bet… [+1694 chars]',
    },
    {
      source: {
        id: null,
        name: 'Gizmodo Australia',
      },
      author: 'Owen Bellwood',
      title: 'Subaru Is More Than 45,000 Cars Behind On Building Cars',
      description:
        'They say you always want what you can’t have, and that appears to apply to Subarus in 2021. The Japanese...\nThe post Subaru Is More Than 45,000 Cars Behind On Building Cars appeared first on Gizmodo Australia.\n\n  Related Stories\r\n<ul><li>U.S. Government Curio…',
      url:
        'https://www.gizmodo.com.au/2021/12/subaru-is-more-than-45000-cars-behind-on-building-cars/',
      urlToImage:
        'https://imgix.gizmodo.com.au/content/uploads/sites/2/2021/12/09/230e254dad4a153b6ed1a444123bb14f.jpg?ar=16%3A9&auto=format&fit=crop&q=65&w=1200',
      publishedAt: '2021-12-11T02:00:02Z',
      content:
        'They say you always want what you cant have, and that appears to apply to Subarus in 2021.\r\nThe Japanese carmaker, like most in the automotive space, is struggling through the vicious cocktail of a g… [+1892 chars]',
    },
    {
      source: {
        id: null,
        name: 'Moneycontrol',
      },
      author: null,
      title:
        'Wall St gains, SP hits record closing high as CPI meets expectations',
      description:
        'The Dow Jones Industrial Average rose 216.3 points, or 0.6%, to 35,970.99, the S&P 500 gained 44.57 points, or 0.95%, to 4,712.02 and the Nasdaq Composite added 113.23 points, or 0.73%, to 15,630.60.',
      url:
        'https://www.moneycontrol.com/news/business/markets/wall-st-gains-sp-hits-record-closing-high-as-cpi-meets-expectations-7813831.html',
      urlToImage:
        'https://images.moneycontrol.com/static-mcnews/2017/03/wall-street-2-770x433.jpg',
      publishedAt: '2021-12-11T01:59:12Z',
      content:
        'Wall Street advanced on Friday and the S&amp;P 500 notched an all-time closing high, as market participants digested an inflation reading that was in line with consensus, but also marked the largest … [+3204 chars]',
    },
    {
      source: {
        id: null,
        name: '24/7 Wall St.',
      },
      author: '247chrislange',
      title: 'Cathie Wood’s ARK Invest Trades for 12/10',
      description:
        "Here's a look at what the ARK Invest exchange-traded funds traded on December 10, 2021.",
      url:
        'https://247wallst.com/investing/2021/12/10/cathie-woods-ark-invest-trades-for-12-10/',
      urlToImage:
        'https://247wallst.com/wp-content/uploads/2021/08/imageForEntry64-SXa.jpg',
      publishedAt: '2021-12-11T01:47:56Z',
      content:
        'Markets bounced back from the pullback on Thursday, but overall the week has been fairly productive. Despite the broad recovery, ARK Funds took another hit and were down across the board. ARKQ perfor… [+5042 chars]',
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      author: null,
      title: 'Ford expects to triple electric Mustang output by 2023 - Reuters',
      description:
        'Ford Motor Co <a href="https://www.reuters.com/companies/F.N" target="_blank">(F.N)</a> expects to triple the output of its all-electric Mustang Mach-E SUV to over 200,000 units per year by 2023 for North America and Europe, its Chief Executive Officer Jim Fa…',
      url:
        'https://www.reuters.com/markets/europe/ford-expects-triple-electric-mustang-output-by-2023-2021-12-11/',
      urlToImage:
        'https://www.reuters.com/resizer/tF08s_5iJHRf7Vy9SbQZQi03gx0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/BU5GNWHD5ROCREGDMPKS7AS6II.jpg',
      publishedAt: '2021-12-11T01:37:00Z',
      content:
        'Dec 10 (Reuters) - Ford Motor Co (F.N) expects to triple the output of its all-electric Mustang Mach-E SUV to over 200,000 units per year by 2023 for North America and Europe, its Chief Executive Off… [+1567 chars]',
    },
    {
      source: {
        id: null,
        name: 'Business Standard',
      },
      author: 'Ishika Mookerjee and Low De Wei | Bloomberg',
      title:
        "Top equity funds in Asia are all buying China's green stocks. Here's why",
      description:
        "China's push to reach carbon neutrality by 2060 is fueling growth in what is already the world's largest renewables market and a leading one for electric-vehicle automakers and suppliers",
      url:
        'https://www.business-standard.com/article/international/top-equity-funds-in-asia-are-all-buying-china-s-green-stocks-here-s-why-121121100125_1.html',
      urlToImage:
        'https://bsmedia.business-standard.com/_media/bs/img/article/2021-12/11/full/1639186407-2869.jpg',
      publishedAt: '2021-12-11T01:36:00Z',
      content:
        'What do Asia’s five best-performing $1 billion-plus equity funds for 2021 have in common? They are all betting big on China’s renewables push.\r\nThe funds returned at least 40 per cent each by investi… [+5903 chars]',
    },
    {
      source: {
        id: null,
        name: 'WebProNews',
      },
      author: 'Matt Milano',
      title:
        'Elon Musk a Social Media Influencer? Tesla CEO Teases the Possibility',
      description:
        'WebProNews\nElon Musk a Social Media Influencer? Tesla CEO Teases the Possibility\nElon Musk is well-known for his social media presence, but the Tesla CEO is teasing a full-time switch to social media influencer.\nElon Musk a Social Media Influencer? Tesla CEO …',
      url:
        'https://www.webpronews.com/elon-musk-a-social-media-influencer-tesla-ceo-teases-the-possibility/',
      urlToImage:
        'https://www.webpronews.com/wp-content/uploads/2021/08/Elon-Musk.jpg',
      publishedAt: '2021-12-11T01:11:37Z',
      content:
        'Elon Musk is well-known for his social media presence, but the Tesla CEO is teasing a full-time switch to social media influencer.\r\nMusk has long been a vocal Twitter user, boosting cryptocurrencies,… [+522 chars]',
    },
    {
      source: {
        id: 'the-times-of-india',
        name: 'The Times of India',
      },
      author: 'Bloomberg',
      title: 'Musk talks of quitting in new tweet',
      description:
        'International Business News: Elon Musk paired another disclosure that he’s disposed more Tesla stock with a joke tweet about quitting his jobs.',
      url:
        'https://timesofindia.indiatimes.com/business/international-business/musk-talks-of-quitting-in-new-tweet/articleshow/88216923.cms',
      urlToImage:
        'https://static.toiimg.com/thumb/msid-88216947,width-1070,height-580,imgsize-34874,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg',
      publishedAt: '2021-12-11T01:00:22Z',
      content: 'Musk talks of quitting in new tweet',
    },
    {
      source: {
        id: null,
        name: 'CleanTechnica',
      },
      author: 'José Pontes',
      title: 'Netherlands Reaches 28% BEV Share In November!',
      description:
        'Despite an artificially inflated November 2020 (CO2 fleet mandates + fiscal changes), the Dutch plugin vehicle (PEV) market managed to stay in positive territory last month (+7% YoY), with 10,613 plugin registrations logged in November, a new year best. And w…',
      url:
        'https://cleantechnica.com/2021/12/10/netherlands-reaches-28-bev-share-in-november/',
      urlToImage:
        'https://cleantechnica.com/files/2021/12/Top-OEM-for-Electric-Vehicle-sales-in-the-Netherlands-January-November-2021-CleanTechnica-logo.png',
      publishedAt: '2021-12-11T00:53:09Z',
      content:
        'Despite an artificially inflated November 2020 (CO2 fleet mandates + fiscal changes), the Dutch plugin vehicle (PEV) market managed to stay in positive territory last month (+7% YoY), with 10,613 plu… [+6968 chars]',
    },
    {
      source: {
        id: null,
        name: "Barron's",
      },
      author: null,
      title:
        'Research Reports: Tesla Partnership and Less Debt Can Drive Hertz Stock Higher',
      description:
        'Revived Hertz Could Put Patient Investors in the Driver’s Seat \nWith bolstered balance sheet and tailwinds from pandemic and economy, post-bankrupt car-rental company looks attractive. Also, Wall Street views on Apple, Rivian, Azek, Stitch Fix, and Lindblad E…',
      url:
        'https://www.barrons.com/articles/tesla-partnership-and-less-debt-can-drive-hertz-stock-higher-51639183538',
      urlToImage: 'https://images.barrons.com/im-414535/social',
      publishedAt: '2021-12-11T00:45:00Z',
      content:
        'These reports, excerpted and edited by Barrons, were issued recently by investment and research firms. The reports are a sampling of analysts thinking; they should not be considered the views or reco… [+4945 chars]',
    },
    {
      source: {
        id: null,
        name: 'CarScoops',
      },
      author: 'Michael Gauthier',
      title:
        'There’s A Tesla Cybertruck Prototype Hiding Under This Yardstick Of A Windshield Wiper',
      description: 'Even Tesla CEO Elon Musk knows the massive wiper is bad',
      url:
        'https://www.carscoops.com/2021/12/theres-a-tesla-cybertruck-prototype-hiding-under-this-yardstick-of-a-windshield-wiper/',
      urlToImage:
        'https://www.carscoops.com/wp-content/uploads/2021/12/2022-Tesla-Cybertruck.jpg',
      publishedAt: '2021-12-11T00:41:36Z',
      content:
        'The Tesla Cybertruck has been delayed until 2022, but its inching closer to production as a YouTuber has caught a prototype that looks street legal.\r\nShot from a drone, the video gives us our best lo… [+1915 chars]',
    },
    {
      source: {
        id: null,
        name: 'Tech Times',
      },
      author: 'Isaiah Richard',
      title:
        'Volkswagen ID. Buzz Confirmed by Recent Press Release; Electric Camper Van Release Date?',
      description:
        'Hippies are now happier as the symbol of peace and chill is now electric and confirmed for its release.',
      url:
        'https://www.techtimes.com/articles/269238/20211210/volkswagen-id-buzz-confirmed-recent-press-release-electric-camper-van.htm',
      urlToImage:
        'https://1734811051.rsc.cdn77.org/data/images/full/397755/volkswagen-camper-van-id-buzz.jpeg',
      publishedAt: '2021-12-11T00:40:00Z',
      content:
        '(Photo : Volkswagen US) \r\n(Photo : Argo AI) \r\nThe Volkswagen ID.Buzz electric camper van had been officially confirmed by the German automaker for production and is coming soon for purchase, among it… [+3003 chars]',
    },
    {
      source: {
        id: null,
        name: 'Nationalcybersecurity.com',
      },
      author: 'Angela Dennis',
      title:
        'Despite risks, there’s great potential in cryptocurrencies | #cybersecurity | #cyberattack | #cybersecurity | #infosecurity | #hacker',
      description: 'World Largest Source Of Security News.',
      url:
        'https://nationalcybersecurity.com/despite-risks-theres-great-potential-in-cryptocurrencies-cybersecurity-cyberattack-cybersecurity-infosecurity-hacker/',
      urlToImage:
        'https://nationalcybersecurity.com/wp-content/uploads/1639179104_524_opinion-button-300-ie.jpeg',
      publishedAt: '2021-12-11T00:38:00Z',
      content:
        'As the human species marches steadily into a present and future driven by innovation and technology, currencies for payment remain for the most part as paper money in circulation, saved up in bank ac… [+5294 chars]',
    },
    {
      source: {
        id: null,
        name: 'Tech Times',
      },
      author: 'Griffin Davis',
      title:
        "Updated Cybertruck Prototype Seen Running in Tesla Fremont Test Track: Here's the new Design",
      description: "Here's what the new version looks like.",
      url:
        'https://www.techtimes.com/articles/269234/20211210/updated-cybertruck-prototype-seen-running-tesla-fremont-test-track-heres.htm',
      urlToImage:
        'https://1734811051.rsc.cdn77.org/data/images/full/397752/updated-cybertruck-prototype-seen-running-in-tesla-fremont-test-track-heres-the-new-design.jpg',
      publishedAt: '2021-12-11T00:20:00Z',
      content:
        '(Photo : Photo by Win McNamee/Getty Images) WASHINGTON - JUNE 12: The Tesla electric car logo is shown during a display of alternative energy vehicles on Capitol Hill June 12, 2008 in Washington, DC.… [+3028 chars]',
    },
    {
      source: {
        id: null,
        name: 'Gizchina.com',
      },
      author: 'Efe Udin',
      title:
        'Qualcomm and AMD seeks to cut their dependence on TSMC – to transfer orders to Samsung',
      description:
        'According to the “Economic Daily” news, Qualcomm and AMD are seeking to transfer some of the chip foundry orders to Samsung Electronics. These American companies ...\n\nThe post Qualcomm and AMD seeks to cut their...\n\nVisit Gizchina.com for full article!',
      url:
        'https://www.gizchina.com/2021/12/10/qualcomm-and-amd-seeks-to-cut-their-dependence-on-tsmc-to-transfer-orders-to-samsung/',
      urlToImage:
        'https://www.gizchina.com/wp-content/uploads/images/2021/06/41197-79825-Chip-Header-xl-1024x576.jpg',
      publishedAt: '2021-12-11T00:16:38Z',
      content:
        'According to the “Economic Daily” news, Qualcomm and AMD are seeking to transfer some of the chip foundry orders to Samsung Electronics. These American companies are doing this in order to diversify … [+2858 chars]',
    },
    {
      source: {
        id: null,
        name: 'Minneapolis Star Tribune',
      },
      author: 'Star Tribune Staff',
      title:
        'Readers Write: Sheriff David Hutchinson, distracted driving, public safety',
      description: 'A better approach, please.',
      url:
        'https://www.startribune.com/readers-write-sheriff-david-hutchinson-distracted-driving-public-safety/600125934/',
      urlToImage:
        'https://chorus.stimg.co/22840071/merlin_55653570.jpg?h=630&w=1200&fit=crop&bg=999&crop=faces',
      publishedAt: '2021-12-10T23:45:00Z',
      content:
        'Sheriff David Hutchinson a man elected by the citizens of Hennepin County who voted for him because they believed in his ability to uphold safety got behind the wheel after drinking. He engaged in th… [+8138 chars]',
    },
    {
      source: {
        id: null,
        name: 'Slashdot.org',
      },
      author: 'feedfeeder',
      title:
        'Mercedes-Benz recalls EQS over error that allowed dashboard video playback while driving',
      description:
        'Mercedes-Benz has issued a server-side update to fix an oversight that had allowed owners of its EQS EV and recent S-Class sedans to watch video content on the 56-inch MBUX Hyperscreen displays found in those cars while they were in motion. In a National High…',
      url: 'https://slashdot.org/firehose.pl?op=view&amp;id=156390019',
      urlToImage: null,
      publishedAt: '2021-12-10T23:32:31Z',
      content:
        'Mercedes-Benz has issued a server-side update to fix an oversight that had allowed owners of its EQS EV and recent S-Class sedans to watch video content on the 56-inch MBUX Hyperscreen displays found… [+1198 chars]',
    },
    {
      source: {
        id: null,
        name: 'CNBC',
      },
      author: 'Ari Levy',
      title:
        'Larry Ellison is now richer than the Google co-founders after big Oracle run-up',
      description:
        "Oracle co-founder Larry Ellison saw his wealth appreciate by almost $16 billion after his company's stock had its second best day in two decades.",
      url:
        'https://www.cnbc.com/2021/12/10/larry-ellison-is-now-richer-than-the-google-co-founders-page-and-brin.html',
      urlToImage:
        'https://image.cnbcfm.com/api/v1/image/106853376-1615571544192-gettyimages-1175129150-img_6502_2019091665104564.jpeg?v=1615572232',
      publishedAt: '2021-12-10T23:23:01Z',
      content:
        "Oracle Chairman Larry Ellison is almost $16 billion richer as of Friday's close, passing Google's co-founders and inching him towards Microsoft's Bill Gates.\r\nOracle's stock surged 16% following a be… [+2314 chars]",
    },
    {
      source: {
        id: 'associated-press',
        name: 'Associated Press',
      },
      author: 'The Associated Press',
      title:
        'Business Highlights: Surging inflation, office plans - Associated Press',
      description:
        '___ Surging inflation is forcing people and businesses to adapt WASHINGTON (AP) — A warehouse worker in Tennessee is running up against price increases that far exceed her modest pay raise.',
      url:
        'https://apnews.com/article/business-health-business-highlights-prices-inflation-7e795feeabecfa3acf678cbc65cd0594',
      urlToImage:
        'https://storage.googleapis.com/afs-prod/media/afs:Medium:751921853724/700.png',
      publishedAt: '2021-12-10T23:18:10Z',
      content:
        '___\r\nSurging inflation is forcing people and businesses to adapt\r\nWASHINGTON (AP) A warehouse worker in Tennessee is running up against price increases that far exceed her modest pay raise. The owner… [+5613 chars]',
    },
  ]
  constructor() {
    super()
    console.log('Hello Iam a cool boy')
    this.state = {
      articles: this.articles,
    }
  }
  // * we will pull call from here(HTTP's)
  render() {
    return (
      <div className={'container my-3'}>
        <h2>Todays top headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            console.log(element)
            return (
              <div className="col-md-4 my-4 " key={element.url}>
                <Newsitem
                  image={element.urlToImage}
                  title={element.title.slice(0, 88)}
                  description={element.description.slice(0, 120)}
                  newsurl={element.url}
                />
              </div>
            )
          })}

          <div className="col-md-4">
            <Newsitem
              title="India won the hockey world finale 2022"
              description=" llkajfa alskjfdal wloerowiuknv calfkja fweui kjsdlfasj fwerywerlk lksjflksjfo;iuweo rlksjhdfls fasoifuoiwer kh iu adffweeuoriwuro skfaslkfd ssfoiwyeor awsonv safkl woeruowi sjkvhckv oasfhyoiuwyawi fvjcvkjdhhf;liwoeri dfkasdflkaj rweurowe rfalkj h"
            />
          </div>
          <div className="col-md-4">
            <Newsitem
              title="India won the hockey world finale 2022"
              description=" llkajfa alskjfdal wloerowiuknv calfkja fweui kjsdlfasj fwerywerlk lksjflksjfo;iuweo rlksjhdfls fasoifuoiwer kh iu adffweeuoriwuro skfaslkfd ssfoiwyeor awsonv safkl woeruowi sjkvhckv oasfhyoiuwyawi fvjcvkjdhhf;liwoeri dfkasdflkaj rweurowe rfalkj h"
            />
          </div>
          <Newsitem />
          <Newsitem />
          <Newsitem />
          <Newsitem />
        </div>
        <Newsitem />
        <Newsitem />
      </div>
    )
  }
}
