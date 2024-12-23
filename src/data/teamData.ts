export interface Member{
    imageUrl : string, 
    name : string , 
    position : string, 
    insta : string, 
    linkedIn : string, 
    github : string,
}

interface Team{

    name : string,
    lead : Member ,
    members : Member[]
    
}

const clubLead : Member = {
    name: "Sameer Jain",
    position: "Club Lead",
    imageUrl  : "/images/Team/sameer_jain.jpeg",
    insta : "https://www.instagram.com/sam_jain_tp13.7.x",
    linkedIn : "https://www.instagram.com/sam_jain_tp13.7.x",
    github : ""
}

const clubCoLead : Member = {
    name : "Dhruv Mundad",
    position : "Club Co-Lead",
    imageUrl  : "/images/Team/dhruv_mundad.jpg",
    insta : "https://www.instagram.com/dhruv_25kt",
    linkedIn : "https://www.linkedin.com/in/dhruv-mundada-7b1a42259/",
    github : ""
    }

const teams : Team[] = [
    {
        "name": "ACTING",
        "lead": {
            "name": "Gopal Kalawate",
            "position": "Acting Lead",
            "imageUrl": "/images/Team/gopal_kalawate.jpg",
            "insta": "https://www.instagram.com/kalawategopal/",
            "linkedIn": "https://www.linkedin.com/in/gopal-kalawate-458a8a253/",
            "github": ""
        },
        "members": [
            {
                "name": "Sameer Jain",
                "position": "Member",
                "imageUrl": "/images/Team/sameer_jain.JPG",
                "insta": "https://www.instagram.com/sam_jain_tp13.7.x",
                "linkedIn": "https://www.linkedin.com/in/sameer-jain-604047256/",
                "github": ""
            },
            {
                "name": "Upal Ingole",
                "position": "Member",
                "imageUrl": "/images/Team/upal_ingole.jpg",
                "insta": "https://www.instagram.com/upal_ingole",
                "linkedIn": "",
                "github": ""
            },
            {
                "name": "Dhruv Mundada",
                "position": "Member",
                "imageUrl": "/images/Team/dhruv_mundada.jpg",
                "insta": "https://www.instagram.com/dhruv_25kt",
                "linkedIn": "https://www.linkedin.com/in/dhruv-mundada-7b1a42259//",
                "github": ""
            },
            {
                "name": "Vidit Prakash",
                "position": "Member",
                "imageUrl": "/images/Team/vidit_prakash.jpg",
                "insta": "https://www.instagram.com/viditrastogii?igsh=MTB0YzcyN2xjdmVoYQ==",
                "linkedIn": "https://www.linkedin.com/in/vidit-prakash-a10280259",
                "github": ""
            },
            {
                "name": "Aarush Chandra",
                "position": "Member",
                "imageUrl": "/images/Team/aarush_chandra.jpeg",
                "insta": "https://www.instagram.com/aarruusshhh/",
                "linkedIn": "https://www.linkedin.com/in/aarush-chandra-86536724a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                "github": ""
            },
            {
                "name": "Aniruddha Date",
                "position": "Member",
                "imageUrl": "/images/Team/aniruddha_date.jpg",
                "insta": "https://www.instagram.com/aniruddhadate_03/",
                "linkedIn": "https://www.linkedin.com/in/aniruddha-date?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "github": ""
            },
            {
                "name": "Mithilesh Tapkire",
                "position": "Member",
                "imageUrl": "/images/Team/mithilesh_tapkire.jpg",
                "insta": "https://www.instagram.com/mithileshtapkire2600",
                "linkedIn": "https://www.linkedin.com/in/mithilesh-tapkire-4b9330259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "github": ""
            },
            {
                "name": "Rudraksh Pandey",
                "position": "Member",
                "imageUrl": "/images/Team/rudraksh_pandey.jpg",
                "insta": "https://www.instagram.com/rudramebarak?igsh=aG05cmN0ZGNwM2Js",
                "linkedIn": "https://in.linkedin.com/in/rudraksh-pandey-0a787b28a",
                "github": ""
            },
            {
                "name": "Saloni Dadve",
                "position": "Member",
                "imageUrl": "/images/Team/saloni_dadave.jpg",
                "insta": "https://www.instagram.com/salonidadave/",
                "linkedIn": "https://www.linkedin.com/in/saloni-dadave-b3a481288/",
                "github": ""
            },
            {
                "name": "Aaditya Dabhadkar",
                "position": "Member",
                "imageUrl": "/images/Team/aaditya_dabhadkar.jpg",
                "insta": "https://www.instagram.com/imaaditya_29?igsh=aDA4ZTFoMGtsYTVl",
                "linkedIn": "https://www.linkedin.com/in/aaditya-dabhadkar-a80a15289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "github": ""
            },
            {
                "name": "Sandesh Charhate",
                "position": "Member",
                "imageUrl": "/images/Team/sandesh_charhate.jpg",
                "insta": "https://www.instagram.com/sandeshcharhate0",
                "linkedIn": "https://www.linkedin.com/in/sandesh-charhate-564125288",
                "github": ""
            },
            {
                "name": "Sumanth Kotikalapudi",
                "position": "Member",
                "imageUrl": "/images/Team/sumanth_kotikalapudi.png",
                "insta": "https://www.instagram.com/sumanthkotikalapudi",
                "linkedIn": "https://www.linkedin.com/in/sumanth-kotikalapudi-186348285/",
                "github": ""
            },
            {
                "name": "Parth Chakerwarti",
                "position": "Member",
                "imageUrl": "/images/Team/parth _chakerwarti.jpg",
                "insta": "https://www.instagram.com/parth_chakerwarti__",
                "linkedIn": "https://www.linkedin.com/in/parth-chakerwarti-99757a28a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "github": ""
            },
            {
                "name": "Vaibhav Khanna",
                "position": "Member",
                "imageUrl": "/images/Team/vaibhav_khanna.jpg",
                "insta": "https://www.instagram.com/vaibhavkhanna086",
                "linkedIn": "https://www.linkedin.com/in/vaibhav-khanna-3b81b5274/",
                "github": ""
            },
            {
                "name": "Fahad Ahmed",
                "position": "Member",
                "imageUrl": "/images/Team/fahad_ahmed.jpg",
                "insta": "",
                "linkedIn": "https://www.linkedin.com/in/fahad-ahmed-8334b3238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "github": ""
            },
            {
                "name": "Anveeksha Jangid",
                "position": "Member",
                "imageUrl": "/images/Team/anveeksha_jangid.jpg",
                "insta": "https://www.instagram.com/archeiie_",
                "linkedIn": "https://www.linkedin.com/in/anveeksha-jangid-786bb1290/",
                "github": ""
            },
            {
                "name": "Aditi Chandak",
                "position": "Member",
                "imageUrl": "/images/Team/aditi_chandak.jpg",
                "insta": "https://www.instagram.com/aditi_chandak25",
                "linkedIn": "https://www.linkedin.com/in/aditi-chandak-2a840b2b1/",
                "github": ""
            },
            {
                "name": "Aditya Srivastava",
                "position": "Member",
                "imageUrl": "/images/Team/aditya_shrivastava.jpg",
                "insta": "https://www.instagram.com/yaarr.adi?igsh=aWZ6Z3U0bjhoOHhn",
                "linkedIn": "https://www.linkedin.com/in/aditya-shrivastava-479a5b291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "github": ""
            },
            {
                "name": "Anshu Singh",
                "position": "Member",
                "imageUrl": "/images/Team/anshu_singh.jpg",
                "insta": "https://www.instagram.com/anxu_7",
                "linkedIn": "https://www.linkedin.com/in/anshu-singh-2b720a29b/",
                "github": ""
            },
            {
                "name": "Aditi Arya",
                "position": "Member",
                "imageUrl": "/images/Team/aditi_arya.jpg",
                "insta": "https://www.instagram.com/_aryaaxx",
                "linkedIn": "https://www.linkedin.com/in/aditi-arya-4b83152b2/",
                "github": ""
            },
            {
                "name": "Om Naik",
                "position": "Member",
                "imageUrl": "/images/Team/om_naik.jpg",
                "insta": "https://www.instagram.com/omnaik_32",
                "linkedIn": "https://www.linkedin.com/in/om-naik-88a214305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "github": ""
            },
            {
                "name": "Saadullah Khwaja",
                "position": "Member",
                "imageUrl": "/images/Team/saad_khwaja.jpg",
                "insta": "",
                "linkedIn": "https://www.linkedin.com/in/saad-khwaja-2a19b0271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "github": ""
            }
        ]
    },
    {
        "name": "POETRY",
        "lead": {
            "name": "Ashu Rajput",
            "position": "Poetry Lead",
            "imageUrl": "/images/Team/ashu_rajput.jpg",
            "insta": "https://www.instagram.com/ashurajput95489?igsh=enpiMmh2ODg4dGcz",
            "linkedIn": "https://www.linkedin.com/in/ashu-rajput-14334a24b",
            "github": ""
        },
        "members": [
            {
                "name": "Sameer Jain",
                "position": "Member",
                "imageUrl": "/images/Team/sameer_jain.JPG",
                "insta": "https://www.instagram.com/sam_jain_tp13.7.x",
                "linkedIn": "https://www.linkedin.com/in/sameer-jain-604047256/",
                "github": ""
            },
            {
                "name": "Khushal Bansal",
                "position": "Member",
                "imageUrl": "/images/Team/khushal_bansal.jpg",
                "insta": "https://www.instagram.com/mr._bansal_18",
                "linkedIn": "https://www.linkedin.com/in/khushal-bansal-991768260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "github": ""
            },
            {
                "name": "Dhruv Mundada",
                "position": "Member",
                "imageUrl": "/images/Team/dhruv_mundada.jpg",
                "insta": "https://www.instagram.com/dhruv_25kt",
                "linkedIn": "https://www.linkedin.com/in/dhruv-mundada-7b1a42259/",
                "github": ""
            },
            {
                "name": "Vidit Prakash",
                "position": "Member",
                "imageUrl": "/images/Team/vidit_prakash.jpg",
                "insta": "https://www.instagram.com/viditrastogii?igsh=MTB0YzcyN2xjdmVoYQ==",
                "linkedIn": "https://www.linkedin.com/in/vidit-prakash-a10280259",
                "github": ""
            },
            {
                "name": "Prateek Vashishth",
                "position": "Member",
                "imageUrl": "/images/Team/prateek_vashishth.jpg",
                "insta": "https://www.instagram.com/prateek_vashishth__?igsh=YWV2MW04dWpncWJv",
                "linkedIn": "https://www.linkedin.com/in/prateek-vashishth-06001226b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "github": ""
            },
            {
                "name": "Vaibhav Khanna",
                "position": "Member",
                "imageUrl": "/images/Team/vaibhav_khanna.jpg",
                "insta": "https://www.instagram.com/vaibhavkhanna086",
                "linkedIn": "https://www.linkedin.com/in/vaibhav-khanna-3b81b5274/",
                "github": ""
            },
            {
                "name": "Aditi Chandak",
                "position": "Member",
                "imageUrl": "/images/Team/aditi_chandak.jpg",
                "insta": "https://www.instagram.com/aditi_chandak25",
                "linkedIn": "https://www.linkedin.com/in/aditi-chandak-2a840b2b1/",
                "github": ""
            },
            {
                "name": "Om Naik",
                "position": "Member",
                "imageUrl": "/images/Team/om_naik.jpg",
                "insta": "https://www.instagram.com/omnaik_32",
                "linkedIn": "https://www.linkedin.com/in/om-naik-88a214305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "github": ""
            },
            {
                "name": "Bhumi Jain",
                "position": "Member",
                "imageUrl": "/images/Team/bhumi_jain.jpg",
                "insta": "https://www.instagram.com/bhumii_2720",
                "linkedIn": "https://www.linkedin.com/in/bhumi-jain-9633872a6/",
                "github": ""
            }
        ]
    },
    {
        "name": "CINEMATOGRAPHY",
        "lead": {
            "name": "Vasu Parashar",
            "position": "Cinematography Lead",
            "imageUrl": "/images/Team/vasu_parashar.JPG",
            "insta": "https://www.instagram.com/whovasu",
            "linkedIn": "https://www.linkedin.com/in/vasu-parashar-12a84424b/",
            "github": ""
        },
        "members": [
            {
                "name": "Sameer Jain",
                "position": "Member",
                "imageUrl": "/images/Team/sameer_jain.JPG",
                "insta": "https://www.instagram.com/sam_jain_tp13.7.x",
                "linkedIn": "https://www.linkedin.com/in/sameer-jain-604047256/",
                "github": ""
            },
            {
                "name": "Dhruv Mundada",
                "position": "Member",
                "imageUrl": "/images/Team/dhruv_mundada.jpg",
                "insta": "https://www.instagram.com/dhruv_25kt",
                "linkedIn": "https://www.linkedin.com/in/dhruv-mundada-7b1a42259/",
                "github": ""
            },
            {
                "name": "Prakhar Beniwal",
                "position": "Member",
                "imageUrl": "/images/Team/prakhar_beniwal.jpg",
                "insta": "https://www.instagram.com/prakhar_7255",
                "linkedIn": "",
                "github": ""
            },
            {
                "name": "Daksh Mehta",
                "position": "Member",
                "imageUrl": "/images/Team/daksh_mehta.JPG",
                "insta": "https://www.instagram.com/Daksh_dgaf",
                "linkedIn": "",
                "github": ""
            },
            {
                "name": "Fahad Ahmed",
                "position": "Member",
                "imageUrl": "/images/Team/fahad_ahmed.jpg",
                "insta": "",
                "linkedIn": "https://www.linkedin.com/in/fahad-ahmed-8334b3238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "github": ""
            },
            {
                "name": "Aditi Chandak",
                "position": "Member",
                "imageUrl": "/images/Team/aditi_chandak.jpg",
                "insta": "https://www.instagram.com/aditi_chandak25",
                "linkedIn": "https://www.linkedin.com/in/aditi-chandak-2a840b2b1/",
                "github": ""
            },
            {
                "name": "Aditya Srivastava",
                "position": "Member",
                "imageUrl": "/images/Team/aditya_shrivastava.jpg",
                "insta": "https://www.instagram.com/yaarr.adi?igsh=aWZ6Z3U0bjhoOHhn",
                "linkedIn": "https://www.linkedin.com/in/aditya-shrivastava-479a5b291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "github": ""
            },
            {
                "name": "Saadullah Khwaja",
                "position": "Member",
                "imageUrl": "/images/Team/saad_khwaja.jpg",
                "insta": "",
                "linkedIn": "https://www.linkedin.com/in/saad-khwaja-2a19b0271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "github": ""
            }
        ]
    },
    {
        "name": "SCRIPT WRITING",
        "lead": {
            "name": "Kushagra Srivastava",
            "position": "Script Writing Lead",
            "imageUrl": "/images/Team/kushagra_srivastava.png",
            "insta": "https://www.instagram.com/kushhh_24_?igsh=MWJnNGF6MzA2aWViZw==",
            "linkedIn": "https://www.linkedin.com/in/kushagra-srivastava-32690b250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            "github": ""
        },
        "members": [
            {
                "name": "Sameer Jain",
                "position": "Member",
                "imageUrl": "/images/Team/sameer_jain.JPG",
                "insta": "https://www.instagram.com/sam_jain_tp13.7.x",
                "linkedIn": "https://www.linkedin.com/in/sameer-jain-604047256/",
                "github": ""
            },
            {
                "name": "Dhruv Mundada",
                "position": "Member",
                "imageUrl": "/images/Team/dhruv_mundada.jpg",
                "insta": "https://www.instagram.com/dhruv_25kt",
                "linkedIn": "https://www.linkedin.com/in/dhruv-mundada-7b1a42259/",
                "github": ""
            },
            {
                "name": "Vidit Prakash",
                "position": "Member",
                "imageUrl": "/images/Team/vidit_prakash.jpg",
                "insta": "https://www.instagram.com/viditrastogii?igsh=MTB0YzcyN2xjdmVoYQ==",
                "linkedIn": "https://www.linkedin.com/in/vidit-prakash-a10280259",
                "github": ""
            },
            {
                "name": "Ashu Rajput",
                "position": "Member",
                "imageUrl": "/images/Team/ashu_rajput.jpg",
                "insta": "https://www.instagram.com/ashurajput95489?igsh=enpiMmh2ODg4dGcz",
                "linkedIn": "https://www.linkedin.com/in/ashu-rajput-14334a24b",
                "github": ""
            },
            {
                "name": "Dhanhanjay Pachori",
                "position": "Member",
                "imageUrl": "/images/Team/dhanhanjay_pachori.png",
                "insta": "https://www.instagram.com/dj.p__",
                "linkedIn": "https://www.linkedin.com/in/dhanhanjay-pachori",
                "github": ""
            },
            {
                "name": "Rudraksh Pandey",
                "position": "Member",
                "imageUrl": "/images/Team/rudraksh_pandey.jpg",
                "insta": "https://www.instagram.com/rudramebarak?igsh=aG05cmN0ZGNwM2Js",
                "linkedIn": "https://in.linkedin.com/in/rudraksh-pandey-0a787b28a",
                "github": ""
            },
            {
                "name": "Daksh Mehta",
                "position": "Member",
                "imageUrl": "/images/Team/daksh_mehta.JPG",
                "insta": "https://www.instagram.com/Daksh_dgaf",
                "linkedIn": "",
                "github": ""
            },
            {
                "name": "Sumanth Kotikalapudi",
                "position": "Member",
                "imageUrl": "/images/Team/sumanth_kotikalapudi.png",
                "insta": "https://www.instagram.com/sumanthkotikalapudi",
                "linkedIn": "https://www.linkedin.com/in/sumanth-kotikalapudi-186348285/",
                "github": ""
            },
            {
                "name": "Aditi Chandak",
                "position": "Member",
                "imageUrl": "/images/Team/aditi_chandak.jpg",
                "insta": "https://www.instagram.com/aditi_chandak25",
                "linkedIn": "https://www.linkedin.com/in/aditi-chandak-2a840b2b1/",
                "github": ""
            },
            {
                "name": "Aditya Srivastava",
                "position": "Member",
                "imageUrl": "/images/Team/aditya_shrivastava.jpg",
                "insta": "https://www.instagram.com/yaarr.adi?igsh=aWZ6Z3U0bjhoOHhn",
                "linkedIn": "https://www.linkedin.com/in/aditya-shrivastava-479a5b291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "github": ""
            },
            {
                "name": "Om Naik",
                "position": "Member",
                "imageUrl": "/images/Team/om_naik.jpg",
                "insta": "https://www.instagram.com/omnaik_32",
                "linkedIn": "https://www.linkedin.com/in/om-naik-88a214305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "github": ""
            },
            {
                "name": "Saadullah Khwaja",
                "position": "Member",
                "imageUrl": "/images/Team/saad_khwaja.jpg",
                "insta": "",
                "linkedIn": "https://www.linkedin.com/in/saad-khwaja-2a19b0271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "github": ""
            },
            {
                "name": "Prakhar Beniwal",
                "position": "Member",
                "imageUrl": "/images/Team/prakhar_beniwal.jpg",
                "insta": "https://www.instagram.com/prakhar_7255",
                "linkedIn": "",
                "github": ""
            }
        ]
    },
    {
        "name": "MANAGEMENT",
        "lead": {
            "name": "Divyansh Nigam",
            "position": "Management Lead",
            "imageUrl": "/images/Team/divyansh_nigam.jpg",
            "insta": "https://www.instagram.com/i_am_divzzzz",
            "linkedIn": "https://www.linkedin.com/in/jyotiraditya-bhos-95281b28b/",
            "github": ""
        },
        "members": [
            {
                "name": "Sameer Jain",
                "position": "Member",
                "imageUrl": "/images/Team/sameer_jain.JPG",
                "insta": "https://www.instagram.com/sam_jain_tp13.7.x",
                "linkedIn": "https://www.linkedin.com/in/sameer-jain-604047256/",
                "github": ""
            },
            {
                "name": "Dhruv Mundada",
                "position": "Member",
                "imageUrl": "/images/Team/dhruv_mundada.jpg",
                "insta": "https://www.instagram.com/dhruv_25kt",
                "linkedIn": "https://www.linkedin.com/in/dhruv-mundada-7b1a42259/",
                "github": ""
            },
            {
                "name": "Kushagra Mandloi",
                "position": "Member",
                "imageUrl": "/images/Team/kushagra_mandloi.jpg",
                "insta": "",
                "linkedIn": "",
                "github": ""
            },
            {
                "name": "Aniruddha Date",
                "position": "Member",
                "imageUrl": "/images/Team/aniruddha_date.jpg",
                "insta": "https://www.instagram.com/aniruddhadate_03/",
                "linkedIn": "https://www.linkedin.com/in/aniruddha-date?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "github": ""
            },
            {
                "name": "Saloni Dadve",
                "position": "Member",
                "imageUrl": "/images/Team/saloni_dadave.jpg",
                "insta": "https://www.instagram.com/salonidadave/",
                "linkedIn": "https://www.linkedin.com/in/saloni-dadave-b3a481288/",
                "github": ""
            },
            {
                "name": "Sandesh Charhate",
                "position": "Member",
                "imageUrl": "/images/Team/sandesh_charhate.jpg",
                "insta": "https://www.instagram.com/sandeshcharhate0",
                "linkedIn": "https://www.linkedin.com/in/sandesh-charhate-564125288",
                "github": ""
            },
            {
                "name": "Sumanth Kotikalapudi",
                "position": "Member",
                "imageUrl": "/images/Team/sumanth_kotikalapudi.png",
                "insta": "https://www.instagram.com/sumanthkotikalapudi",
                "linkedIn": "https://www.linkedin.com/in/sumanth-kotikalapudi-186348285/",
                "github": ""
            },
            {
                "name": "Parth Chakerwarti",
                "position": "Member",
                "imageUrl": "/images/Team/parth _chakerwarti.jpg",
                "insta": "https://www.instagram.com/parth_chakerwarti__",
                "linkedIn": "https://www.linkedin.com/in/parth-chakerwarti-99757a28a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "github": ""
            },
            {
                "name": "Aditi Chandak",
                "position": "Member",
                "imageUrl": "/images/Team/aditi_chandak.jpg",
                "insta": "https://www.instagram.com/aditi_chandak25",
                "linkedIn": "https://www.linkedin.com/in/aditi-chandak-2a840b2b1/",
                "github": ""
            },
            {
                "name": "Aditya Srivastava",
                "position": "Member",
                "imageUrl": "/images/Team/aditya_shrivastava.jpg",
                "insta": "https://www.instagram.com/yaarr.adi?igsh=aWZ6Z3U0bjhoOHhn",
                "linkedIn": "https://www.linkedin.com/in/aditya-shrivastava-479a5b291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "github": ""
            },
            {
                "name": "Bhumi Jain",
                "position": "Member",
                "imageUrl": "/images/Team/bhumi_jain.jpg",
                "insta": "https://www.instagram.com/bhumii_2720",
                "linkedIn": "https://www.linkedin.com/in/bhumi-jain-9633872a6/",
                "github": ""
            },
            {
                "name": "Prakhar Beniwal",
                "position": "Member",
                "imageUrl": "/images/Team/prakhar_beniwal.jpg",
                "insta": "https://www.instagram.com/prakhar_7255",
                "linkedIn": "",
                "github": ""
            }
        ]
    },
    {
        "name": "External Affairs",
        "lead": {
            "name": "Krishnasingh Thakur",
            "position": "External Affairs Lead",
            "imageUrl": "/images/Team/krishnasingh_thakur.jpg",
            "insta": "https://www.instagram.com/krishnasinghhthakur/",
            "linkedIn": "http://www.linkedin.com/in/krishnasingh-thakur423",
            "github": ""
        },
        "members": [
            {
                "name": "Sameer Jain",
                "position": "Member",
                "imageUrl": "/images/Team/sameer_jain.JPG",
                "insta": "https://www.instagram.com/sam_jain_tp13.7.x",
                "linkedIn": "https://www.linkedin.com/in/sameer-jain-604047256/",
                "github": ""
            },
            {
                "name": "Dhruv Mundada",
                "position": "Member",
                "imageUrl": "/images/Team/dhruv_mundada.jpg",
                "insta": "https://www.instagram.com/dhruv_25kt",
                "linkedIn": "https://www.linkedin.com/in/dhruv-mundada-7b1a42259/",
                "github": ""
            },
            {
                "name": "Kushagra Mandloi",
                "position": "Member",
                "imageUrl": "/images/Team/kushagra_mandloi.jpg",
                "insta": "",
                "linkedIn": "",
                "github": ""
            },
            {
                "name": "Rudraksh Pandey",
                "position": "Member",
                "imageUrl": "/images/Team/rudraksh_pandey.jpg",
                "insta": "https://www.instagram.com/rudramebarak?igsh=aG05cmN0ZGNwM2Js",
                "linkedIn": "https://in.linkedin.com/in/rudraksh-pandey-0a787b28a",
                "github": ""
            },
            {
                "name": "Sumanth Kotikalapudi",
                "position": "Member",
                "imageUrl": "/images/Team/sumanth_kotikalapudi.png",
                "insta": "https://www.instagram.com/sumanthkotikalapudi",
                "linkedIn": "https://www.linkedin.com/in/sumanth-kotikalapudi-186348285/",
                "github": ""
            },
            {
                "name": "Vaibhav Khanna",
                "position": "Member",
                "imageUrl": "/images/Team/vaibhav_khanna.jpg",
                "insta": "https://www.instagram.com/vaibhavkhanna086",
                "linkedIn": "https://www.linkedin.com/in/vaibhav-khanna-3b81b5274/",
                "github": ""
            },
            {
                "name": "Fahad Ahmed",
                "position": "Member",
                "imageUrl": "/images/Team/fahad_ahmed.jpg",
                "insta": "",
                "linkedIn": "https://www.linkedin.com/in/fahad-ahmed-8334b3238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "github": ""
            },
            {
                "name": "Bhumi Jain",
                "position": "Member",
                "imageUrl": "/images/Team/bhumi_jain.jpg",
                "insta": "https://www.instagram.com/bhumii_2720",
                "linkedIn": "https://www.linkedin.com/in/bhumi-jain-9633872a6/",
                "github": ""
            },
            {
                "name": "Prakhar Beniwal",
                "position": "Member",
                "imageUrl": "/images/Team/prakhar_beniwal.jpg",
                "insta": "https://www.instagram.com/prakhar_7255",
                "linkedIn": "",
                "github": ""
            }
        ]
    },
    {
        "name": "DESIGN",
        "lead": {
            "name": "Sameer Jain",
            "position": "Web Developer",
            "imageUrl": "/images/Team/img1.jpeg",
            "insta": "",
            "linkedIn": "",
            "github": ""
        },
        "members": [
            {
                "name": "Sameer Jain",
                "position": "Member",
                "imageUrl": "/images/Team/sameer_jain.JPG",
                "insta": "https://www.instagram.com/sam_jain_tp13.7.x",
                "linkedIn": "https://www.linkedin.com/in/sameer-jain-604047256/",
                "github": ""
            },
            {
                "name": "Dhruv Mundada",
                "position": "Member",
                "imageUrl": "/images/Team/dhruv_mundada.jpg",
                "insta": "https://www.instagram.com/dhruv_25kt",
                "linkedIn": "https://www.linkedin.com/in/dhruv-mundada-7b1a42259/",
                "github": ""
            },
            {
                "name": "Rudraksh Pandey",
                "position": "Member",
                "imageUrl": "/images/Team/rudraksh_pandey.jpg",
                "insta": "https://www.instagram.com/rudramebarak?igsh=aG05cmN0ZGNwM2Js",
                "linkedIn": "https://in.linkedin.com/in/rudraksh-pandey-0a787b28a",
                "github": ""
            },
            {
                "name": "Aditi Chandak",
                "position": "Member",
                "imageUrl": "/images/Team/aditi_chandak.jpg",
                "insta": "https://www.instagram.com/aditi_chandak25",
                "linkedIn": "https://www.linkedin.com/in/aditi-chandak-2a840b2b1/",
                "github": ""
            },
            {
                "name": "Aditya Srivastava",
                "position": "Member",
                "imageUrl": "/images/Team/aditya_shrivastava.jpg",
                "insta": "https://www.instagram.com/yaarr.adi?igsh=aWZ6Z3U0bjhoOHhn",
                "linkedIn": "https://www.linkedin.com/in/aditya-shrivastava-479a5b291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "github": ""
            },
            {
                "name": "Anshu Singh",
                "position": "Member",
                "imageUrl": "/images/Team/anshu_singh.jpg",
                "insta": "https://www.instagram.com/anxu_7",
                "linkedIn": "https://www.linkedin.com/in/anshu-singh-2b720a29b/",
                "github": ""
            }
        ]
    },
    {
        "name": "SOCIAL MEDIA",
        "lead": {
            "name": "Sameer Jain",
            "position": "Web Developer",
            "imageUrl": "/images/Team/img1.jpeg",
            "insta": "",
            "linkedIn": "",
            "github": ""
        },
        "members": [
            {
                "name": "Sameer Jain",
                "position": "Member",
                "imageUrl": "/images/Team/sameer_jain.JPG",
                "insta": "https://www.instagram.com/sam_jain_tp13.7.x",
                "linkedIn": "https://www.linkedin.com/in/sameer-jain-604047256/",
                "github": ""
            },
            {
                "name": "Dhruv Mundada",
                "position": "Member",
                "imageUrl": "/images/Team/dhruv_mundada.jpg",
                "insta": "https://www.instagram.com/dhruv_25kt",
                "linkedIn": "https://www.linkedin.com/in/dhruv-mundada-7b1a42259/",
                "github": ""
            },
            {
                "name": "Aditi Chandak",
                "position": "Member",
                "imageUrl": "/images/Team/aditi_chandak.jpg",
                "insta": "https://www.instagram.com/aditi_chandak25",
                "linkedIn": "https://www.linkedin.com/in/aditi-chandak-2a840b2b1/",
                "github": ""
            },
            {
                "name": "Aditya Srivastava",
                "position": "Member",
                "imageUrl": "/images/Team/aditya_shrivastava.jpg",
                "insta": "https://www.instagram.com/yaarr.adi?igsh=aWZ6Z3U0bjhoOHhn",
                "linkedIn": "https://www.linkedin.com/in/aditya-shrivastava-479a5b291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "github": ""
            }
        ]
    },
    {
        "name": "DEVELOPERS",
        "lead": {
            "name": "Nikhil Mishra",
            "position": "Web Developer",
            "imageUrl": "/images/Team/img1.jpeg",
            "insta": "",
            "linkedIn": "",
            "github": ""
        },
        "members": [
            {
                "name": "Saksham Agrawal",
                "position": "Web Developer",
                "imageUrl": "/images/Team/img1.jpeg",
                "insta": "",
                "linkedIn": "",
                "github": ""
            },
            {
                "name": "Varun Singh",
                "position": "Web Developer",
                "imageUrl": "/images/Team/varun_singh.jpg",
                "insta": "",
                "linkedIn": "https://www.linkedin.com/in/varunsingh20?trk=contact-info",
                "github": "https://github.com/AlgoFoe"
            },
            {
                "name": "Yash Verma",
                "position": "Web Developer",
                "imageUrl": "/images/Team/img1.jpeg",
                "insta": "",
                "linkedIn": "",
                "github": ""
            },
            {
                "name": "Priyanshu Dixit",
                "position": "Web Developer",
                "imageUrl": "/images/Team/img1.jpeg",
                "insta": "",
                "linkedIn": "",
                "github": ""
            }
        ]
    }
]

interface Data {
    clubLead : Member,
    clubCoLead : Member,
    teams : Team[]

}
const data : Data   =  {
    clubLead : clubLead,
    clubCoLead : clubCoLead,
    teams : teams
}

export default data