export function isLinux(platform = process.platform) {
  return platform === 'linux';
}

export function isWindows(platform = process.platform) {
  return platform === 'win32';
}

export function isMac(platform = process.platform) {
  return platform === 'darwin';
}


export const mockRequest = (mock, timeout) =>
  new Promise(resolve => setTimeout(() => resolve(mock), timeout));


export const JOB_MOCK_RESPONSE = {
  json: () => {
    return JSON.parse(`[{"owner":"CYBSTQA","phase":14,"subsystem":"JES2","phase-name":"Job is actively executing","job-correlator":"S0045558USILCA11D3F78472.......:","type":"STC","url":"https:\/\/usilca32.ca.com:1443\/zosmf\/restjobs\/jobs\/S0045558USILCA11D3F78472.......%3A","jobid":"STC45558","class":"STC","files-url":"https:\/\/usilca32.ca.com:1443\/zosmf\/restjobs\/jobs\/S0045558USILCA11D3F78472.......%3A\/files","jobname":"EBAEAPI","status":"ACTIVE","retcode":null},{"owner":"CYBSTQA","phase":14,"subsystem":"JES2","phase-name":"Job is actively executing","job-correlator":"S0045510USILCA11D3F7846B.......:","type":"STC","url":"https:\/\/usilca32.ca.com:1443\/zosmf\/restjobs\/jobs\/S0045510USILCA11D3F7846B.......%3A","jobid":"STC45510","class":"STC","files-url":"https:\/\/usilca32.ca.com:1443\/zosmf\/restjobs\/jobs\/S0045510USILCA11D3F7846B.......%3A\/files","jobname":"EBAEWSS","status":"ACTIVE","retcode":null},{"owner":"CYBSTQA","phase":14,"subsystem":"JES2","phase-name":"Job is actively executing","job-correlator":"S0045499USILCA11D3F78469.......:","type":"STC","url":"https:\/\/usilca32.ca.com:1443\/zosmf\/restjobs\/jobs\/S0045499USILCA11D3F78469.......%3A","jobid":"STC45499","class":"STC","files-url":"https:\/\/usilca32.ca.com:1443\/zosmf\/restjobs\/jobs\/S0045499USILCA11D3F78469.......%3A\/files","jobname":"EBAEP2","status":"ACTIVE","retcode":null},{"owner":"CYBSTQA","phase":14,"subsystem":"JES2","phase-name":"Job is actively executing","job-correlator":"S0045479USILCA11D3F78465.......:","type":"STC","url":"https:\/\/usilca32.ca.com:1443\/zosmf\/restjobs\/jobs\/S0045479USILCA11D3F78465.......%3A","jobid":"STC45479","class":"STC","files-url":"https:\/\/usilca32.ca.com:1443\/zosmf\/restjobs\/jobs\/S0045479USILCA11D3F78465.......%3A\/files","jobname":"EBAE","status":"ACTIVE","retcode":null}]`);
  },
};


export const JOB_FILES_MOCK_RESPONSE = {
  json: () => {
    return JSON.parse(`[{"recfm":"UA","records-url":"https:\\/\\/usilca32.ca.com:1443\\/zosmf\\/restjobs\\/jobs\\/S0045558USILCA11D3F78472.......%3A\\/files\\/2\\/records","stepname":"JES2","subsystem":"JES2","job-correlator":"S0045558USILCA11D3F78472.......:","byte-count":0,"lrecl":133,"jobid":"STC45558","ddname":"JESMSGLG","id":2,"record-count":260319,"class":"X","jobname":"EBAEAPI","procstep":null},{"recfm":"V","records-url":"https:\\/\\/usilca32.ca.com:1443\\/zosmf\\/restjobs\\/jobs\\/S0045558USILCA11D3F78472.......%3A\\/files\\/3\\/records","stepname":"JES2","subsystem":"JES2","job-correlator":"S0045558USILCA11D3F78472.......:","byte-count":2528,"lrecl":136,"jobid":"STC45558","ddname":"JESJCL","id":3,"record-count":38,"class":"X","jobname":"EBAEAPI","procstep":null},{"recfm":"VA","records-url":"https:\\/\\/usilca32.ca.com:1443\\/zosmf\\/restjobs\\/jobs\\/S0045558USILCA11D3F78472.......%3A\\/files\\/4\\/records","stepname":"JES2","subsystem":"JES2","job-correlator":"S0045558USILCA11D3F78472.......:","byte-count":0,"lrecl":137,"jobid":"STC45558","ddname":"JESYSMSG","id":4,"record-count":135059,"class":"X","jobname":"EBAEAPI","procstep":null},{"recfm":"VB","records-url":"https:\\/\\/usilca32.ca.com:1443\\/zosmf\\/restjobs\\/jobs\\/S0045558USILCA11D3F78472.......%3A\\/files\\/104\\/records","stepname":"RUNAPI","subsystem":"JES2","job-correlator":"S0045558USILCA11D3F78472.......:","byte-count":0,"lrecl":1333,"jobid":"STC45558","ddname":"SYSPRINT","id":104,"record-count":0,"class":"X","jobname":"EBAEAPI","procstep":null},{"recfm":"VB","records-url":"https:\\/\\/usilca32.ca.com:1443\\/zosmf\\/restjobs\\/jobs\\/S0045558USILCA11D3F78472.......%3A\\/files\\/105\\/records","stepname":"RUNAPI","subsystem":"JES2","job-correlator":"S0045558USILCA11D3F78472.......:","byte-count":0,"lrecl":1333,"jobid":"STC45558","ddname":"SYSOUT","id":105,"record-count":0,"class":"X","jobname":"EBAEAPI","procstep":null},{"recfm":"VB","records-url":"https:\\/\\/usilca32.ca.com:1443\\/zosmf\\/restjobs\\/jobs\\/S0045558USILCA11D3F78472.......%3A\\/files\\/107\\/records","stepname":"RUNAPI","subsystem":"JES2","job-correlator":"S0045558USILCA11D3F78472.......:","byte-count":0,"lrecl":1333,"jobid":"STC45558","ddname":"STDOUT","id":107,"record-count":533712,"class":"X","jobname":"EBAEAPI","procstep":null},{"recfm":"VB","records-url":"https:\\/\\/usilca32.ca.com:1443\\/zosmf\\/restjobs\\/jobs\\/S0045558USILCA11D3F78472.......%3A\\/files\\/108\\/records","stepname":"RUNAPI","subsystem":"JES2","job-correlator":"S0045558USILCA11D3F78472.......:","byte-count":0,"lrecl":1333,"jobid":"STC45558","ddname":"STDERR","id":108,"record-count":0,"class":"X","jobname":"EBAEAPI","procstep":null}]`);
  },
};


export const JOB_CONTENT_MOCK = {
  json: () => {
    return JSON.parse(`        
        1 //EBAEAPI  JOB (113400000),'ZZZZZ ZZZZZ',CLASS=A,MSGCLASS=X,            STC11111
          // REGION=1000M,MSGLEVEL=(1,1)
        2 /*JOBPARM SYSAFF=XXXX
          //*------------------------------------------------------------------*
          //*  CONTACT INFO:    XXXXX XXXXX         PH:+QQ0-QQ6-AQ7-ZZQ  1111111
          //*  ALTERNATE:       XxXXXX XXXXX        PH:+QQ0-QQ6-AQ7-ZFA  1111!!1
          //*  ALTERNATE:       XXXXX XOXOX0X       PH:+QQ0-QQ6-AQ7-ZAQ  1111111
          //*  DESCRIPTION:     CA WORKLOAD AUTOMATION EE                      *
          //*  CO-REQ:          TCP/IP,USS                                     *
          //*  ESTIMATED CPU:   60 MINUTES                                     *
          //*  EST. ELAPSED:    7 DAYS                                         *
          //*  STARTUP:         S EBAE                                         *
          //*  NORMAL STOP:     C EBAE                                         *
          //*  CANCEL:          C EBAE,DUMP                                    *
          //*  SPECIAL INFO:    USED FOR QA OF CA WORKLOAD AUTOMATION EE       *
          //*                                                                  *
          //*  REGION:          PRAGUE                                         *
          //*  LAST UPDATED:    24 November 2017                               *
          //*------------------------------------------------------------------*
        3 //DELARCH EXEC PGM=BPXBATCH,
          //* PARM='SH /a/XXXXXXX/ESP/rest/run.sh'
          // PARM='SH /a/XXXXXXX/ESP/rest/deleteArchive.sh'
        4 //STDOUT   DD  SYSOUT=*
        5 //STDERR   DD  SYSOUT=*
        6 //RUNAPI   EXEC PGM=JVMLDM86,REGION=0M,
          // PARM='/+I org.springframework.boot.loader.JarLauncher start'
        7 //STEPLIB  DD DISP=SHR,DSN=APC.XXXX.XXXXXX.TTTTTTT.D3.LOADLIB
        8 //STDENV   DD DATA,DLM=@@
        9 //SYSPRINT DD SYSOUT=*,DCB=LRECL=1333     < System stdout
       10 //SYSOUT   DD SYSOUT=*,DCB=LRECL=1333     < System stderr
       11 //STDMSG   DD SYSOUT=*,DCB=LRECL=1333     < Rerouted stderr
       12 //STDOUT   DD SYSOUT=*,DCB=LRECL=1333     < Java System.out
       13 //STDERR   DD SYSOUT=*,DCB=LRECL=1333     < Java System.err
       14 //CEEDUMP  DD SYSOUT=*
       15 //SYSUDUMP DD SYSOUT=4
       16 //ABNLIGNR DD DUMMY
       17 //CADVSTOP DD DUMMY        < Turn off CA-SYMDUMP processing
       18 //
`);
  },
};
