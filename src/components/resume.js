import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://pbs.twimg.com/profile_images/1219538759663800320/TUOFWSdj_400x400.jpg"
                alt="avator"
                style={{ height: "240px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Shuma Seki</h2>
            <h4 style={{color: 'grey'}}>Railsエンジニアとして価値を創造する</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>このサービスいんじゃないかなと思ったときに実現できる人材になりたいです。プログラミング言語はエンジニアの方と会話する上でも共通言語として必要であると感じています。また今の時代サービスをやるとしたらインターネットを使うのは当たり前であると思うので、エンジニアリングにも精通したいと考えています。Railsを言語として選んでいるのは自分がよく使うサービスがRailsで作られているものが多く学びやすいと考えたからです。</p>
            <h4 style={{color: 'grey'}}>事業家として価値を創造する</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>市場規模と課題そして勝ち筋をしっかり見極めた上でサービスを展開できる人材になりたいです。プロダクトアウトにはならず、しっかりとマーケットを見ることが必要であると考えています。またPL/KPIなどを含む事業計画書やどのようにしてユーザーの方にアプローチするのかといった方法まで熟知していきたいです。</p>
            <h5>Phone</h5>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>08056521020</p>
            <h5>Email</h5>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>shumaseki40@gmail.com</p>

          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2017}
              endYear={2022}
              schoolName="Waseda University"
              schoolDescription="政治経済学部経済学科　休学したため22卒"
            />

            <hr style={{ borderTop: '3px solid "e22947' , width: '50%'}} />

            <h2>experience</h2>

            <Experience
              startYear={2018}
              endYear={2018}
              jobName="会員数600名ほどのサークルの協賛チーフとして活動"
              jobDescription="私は大学2年生の頃、所属していた早稲田大学放送研究会の協賛チーフとして活動してきました。主な活動はスポンサーを募ることです。私は過去の協賛活動とは違ったユニークな協賛活動はできないかと様々な企業やアイデアを考えました。３ヶ月以上もの間、企業に営業に行き交渉をした経験を今後は実際のビジネスに生かしていきたいと考えています。"

            />
            <Experience
              startYear={2018}
              endYear={2019}
              jobName="HappyHack"
              jobDescription="Pepperロボのアプリ開発と運用"

            />

            <Experience
              startYear={2019}
              endYear={2019}
              jobName="UNITED株式会社"
              jobDescription="新規事業の立ち上げをUNITEDのもとで行いました。実際にPL/KPIを含む事業計画書を作り、100人ほどの前でプレゼンさせていただく機会をいただきました。自分の事業自体は10月で一旦終了になりましたが、この数ヶ月毎日10時間程度新規事業立ち上げに取り組んできたのでとても充実した時間を過ごせたとともに、新たな挑戦に向けていい下地ができたと考えています。"

            />

<Experience
              startYear={2019}

              jobName="早稲田大学授業レビューサイトKonpeki"
              jobDescription="Railsエンジニアとして早稲田大学の授業レビュー・チャットの立ち上げ・運営"

            />

            <Experience
              startYear={2019}

              jobName="テナンタ"
              jobDescription="未経験ながらRailsエンジニアとして今は学習段階"

              />
            <hr style={{ borderTop: '3px solid "e22947', width: '50%' }} />
            <h2>Skills</h2>
            <Skills
              skill="Ruby on Rails"
              progress={70} />
            <Skills
              skill="React"
              progress={25} />
            <Skills
              skill="Premier"
              progress={40} />
            <Skills
            skill="After Affect"
            progress={40} />
            <h2>長所/短所</h2>
            <Skills
              skill="行動力"
              progress={80} />
            <Skills
              skill="好奇心"
              progress={100} />
            <Skills
              skill="ユニーク"
              progress={80} />

            <Skills
              skill="丁寧"
              progress={30} />

            <h2>関心</h2>
            <Skills
              skill="新規事業・起業"
              progress={100} />
            <Skills
              skill="海外・発展途上国支援"
              progress={80} />

            <Skills
              skill="心理学"
              progress={100}/>


          </Cell>

        </Grid>
      </div>
    )
  }
}

export default Resume;