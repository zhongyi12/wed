<template lang="html">
  <div class="ticket-wrapper">
    <div class="ticket-select-wrapper">
      <h3 class="font-big head" v-show="$route.params.type === 'technology' || $route.params.type === 'policy'" v-text="loginPage.after_title"></h3>
      <h3 class="font-big head" v-show="$route.params.type === 'purchase'" v-text="loginPage.pur_title"></h3>
      <h3 class="font-big head" v-show="$route.params.type === 'cooperation'" v-text="loginPage.co_title"></h3>
      <!--<el-card class="box-card select-category"  v-if="category==='0'">-->
        <!--<h5 v-text="loginPage.first"></h5>-->
        <!--<div v-for="(val,idx) in loginPage.category" :key="idx">-->
          <!--<el-radio class="radio" v-model="category" :label="form1.CATEGORY_VALUES[idx]">{{val}}</el-radio>-->
        <!--</div>-->
      <!--</el-card>-->
      <div class="signin-wrapper" id="login">
        <el-form :model="form1" :rules="rules" ref="form1" class="form1 login-form left">
          <div class="input-wrapper" v-if="policy">
            <el-form-item :label="loginPage.form1.return" prop="return">
              <el-select v-model="form1.return" :placeholder="loginPage.hint.select">
                <el-option
                  v-for="(item,index) in loginPage.returnOptions"
                  :key="index"
                  :label="item"
                  :value="form1.RETURN_VALUES[index]">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item :label="loginPage.form1.info" prop="info">
              <el-radio-group v-model="form1.info">
                <el-radio-button label="report" @click="form1.info = 'report'">{{loginPage.form1.report.upload}}</el-radio-button>
                <!-- <span v-text="loginPage.form1.or"></span> -->
                <el-radio-button label="form" @click="form1.info = 'form'">{{loginPage.form1.report.form}}</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <div v-if="form1.info === 'form'">
              <el-form-item :label="loginPage.form1.product" prop="product">
                <el-select v-model="form1.product" :placeholder="loginPage.hint.select">
                  <el-option
                    v-for="(item,index) in form1.PRODUCT_OPTIONS"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                  <el-option :label="loginPage.form1.other" :value="form1.OTHER_VALUE"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item :label="loginPage.form1.serial" prop="serial">
                <el-input :placeholder="loginPage.hint.serial" v-model="form1.serial"></el-input>
              </el-form-item>
              <el-form-item :label="loginPage.form1.firmware" prop="firmware">
                <el-select v-model="form1.firmware" :placeholder="loginPage.hint.select">
                  <el-option
                    v-for="(item,index) in form1.FRIMWARE_OPTIONS"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                  <el-option :label="loginPage.firmwareOption" :value="form1.FRIMWARE_VALUE"></el-option>
                  <el-option :label="loginPage.form1.other" :value="form1.OTHER_VALUE"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item :label="loginPage.form1.software" prop="software">
                <el-select v-model="form1.software" :placeholder="loginPage.hint.select">
                  <el-option
                    v-for="(item,index) in form1.SOFTWARE_OPTIONS"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                  <el-option :label="loginPage.form1.other" :value="form1.OTHER_VALUE"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item :label="loginPage.form1.version" prop="version">
                <el-input :placeholder="loginPage.hint.input" v-model="form1.version"></el-input>
              </el-form-item>
              <el-form-item :label="loginPage.form1.os" prop="os">
                <el-select v-model="form1.os" :placeholder="loginPage.hint.select">
                  <el-option
                    v-for="(item,index) in form1.OS_OPTIONS"
                    :key="index"
                    :label="item"
                    :value="item">
                  </el-option>
                  <el-option :label="loginPage.form1.other" :value="form1.OTHER_VALUE_EN"></el-option>
                </el-select>
              </el-form-item>
            </div>
            <el-form-item v-else label="">
              <el-upload
                class="upload-demo"
                :action="request.URL"
                :headers="request.headers"
                :on-success="handleSuccess"
                :http-request="httpRequest"
                :on-change="handleChange"
                :on-remove="handleRemove"
                ref="upload">
                <el-button size="small" type="primary">{{loginPage.hint.upload}}</el-button>
                <div slot="tip" class="el-upload__tip" v-html="loginPage.form1.file2"></div>
              </el-upload>
            </el-form-item>
            <el-form-item :label="loginPage.form1.date" prop="date">
              <el-date-picker
                v-model="form1.date"
                type="date"
                format="yyyy-MM-dd"
                :picker-options="pickerMaxDate"
                :placeholder="loginPage.hint.date">
              </el-date-picker>
            </el-form-item>
          </div>

          <div class="input-wrapper">

            <el-form-item :label="loginPage.form1.title" prop="title">
              <el-input :placeholder="loginPage.hint.input" v-model="form1.title"></el-input>
            </el-form-item>
            <el-form-item :label="loginPage.form1.description" prop="description">
              <el-input :placeholder="loginPage.hint.input" v-model="form1.description" type="textarea" :rows="3"></el-input>
            </el-form-item>
            <el-form-item :label="loginPage.form1.attachment">
              <el-upload
                class="upload-demo"
                :action="request.URL"
                :headers="request.headers"
                :on-success="handleSuccess"
                :http-request="httpRequest"
                :on-change="handleChange"
                :on-remove="handleRemove"
                ref="upload1">
                <el-button size="small" type="primary">{{loginPage.hint.upload}}</el-button>
                <div slot="tip" class="el-upload__tip" v-html="loginPage.form1.file"></div>
                <!--<div slot="tip" class="el-upload__tip">{{loginPage.hint.size}} 10MB</div>-->
              </el-upload>
            </el-form-item>
          </div>


          <el-form-item>
            <el-button v-show="$route.params.type !== 'cooperation'" @click="goBack()">{{ loginPage.cancel }}</el-button>
            <el-button type="primary" :loading="show.submitDisable" @click="submit('form1')">{{loginPage.submit}}</el-button>
            <!--<el-button @click="clearInput('form1')">清除</el-button>-->
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="loading" v-show="showLoading"><i class="el-icon-loading"></i>{{ loginPage.loading }}</div>
  </div>
</template>
<script>
const eventBus = require('../module/eventBus');
import config from "../../../config";
export default {
data() {
    return {
      policy: false,
      showLoading: false,
      category: '0',
      request: {
        URL: '',
        Email: '',
        headers: null,
        token: '',
        data: null,
      },
      userInfo: {},
      errorMsg: {
        loginEmail: '',
        loginPassword: '',
        registerEmail: '',
        registerPassword: '',
        registerRePassword: '',
        registerCountry: '',
        registerGender: '',
        registerBirth: '',
      },
      countryList: [],
      fileTokens: {},
      fileIDs: {},
      zipFileCount: 0,
      show: {
        loginDark: true,
        registerDark: true,
        submitDisable: false,
      },
      loginPage: {},
      rules: {},
      form1: {
        title: null,
        return: null,
        software: null,
        os: null,
        product: null,
        firmware: null,
        serial: '',
        date: '',
        description: '',
        version: '',
        info: 'report',
        CATEGORY_VALUES: {
          4: '购买咨询 - Pre-sales Consultation',
          5: '售后支持 - After Sales Support',
          6: '商务合作 - Business Cooperation',
          9: '其他问题 - Others',
        },
        RETURN_VALUES: {
          1: '软件问题 - Software Problems',
          2: '硬件问题 - Hardware Problems',
          3: '固件问题 - Firmware Problems',
          4: '维修服务 - Repair Service',
        },
        SOFTWARE_OPTIONS: {
          1: 'uArm Studio',
          2: 'Cura For uArm',
          3: 'uClient',
          4: 'uArm Assistant',
          5: 'Arduino Library',
          6: 'Python Library',
          7: 'ROS Library',
        },
        OS_OPTIONS: {
          1: 'Windows 10',
          2: 'Windows 8',
          3: 'Windows 7',
          4: 'MacOS 10.11.x',
          5: 'MacOS 10.12.x',
          6: 'Linux',
        },
        PRODUCT_OPTIONS: {
          1: 'uArm Swift Pro',
          2: 'uArm Swift',
          3: 'uArm Metal',
        },
        FRIMWARE_OPTIONS: {
//          0: '1.7.X',
//          1: '2.2.X',
//          2: '2.3.5',
//          3: '3.1.2',
//          4: '3.1.5',
//          5: '3.1.9',
          1: '3.1.16',
          2: '3.1.17',
          3: '3.2.0',
        },
        FRIMWARE_VALUE: '检测不到-Not detected',
        OTHER_VALUE: '其他-Others',
        OTHER_VALUE_EN: 'Others',
      },
      pickerMaxDate: {
        disabledDate(time){
          return time > Date.now();
        },
      },
    };
  },
  created() {
    if(sessionStorage.loginToken === undefined || sessionStorage.loginToken === 'null'){
      this.$router.push({ name:'userlogin', params:{ from: 'ticket',type: this.$route.params.type}});
    }
    if(this.$route.params.type === 'technology' || this.$route.params.type === 'policy'){
      this.policy = true;
      this.category = this.form1.CATEGORY_VALUES['5'];
    }else if(this.$route.params.type === 'purchase'){
      this.category = this.form1.CATEGORY_VALUES['4'];
    }else{
      this.category = this.form1.CATEGORY_VALUES['6'];
    }
    const langText = {
				cn:{
          header: '提交新问题',
          after_title: '售后咨询',
          co_title: '合作咨询',
          pur_title: '购买咨询',
          first: '选择问题类型',
          loading: '正在提交，请稍等...',
          category: {
            // 1: 'Software Problem',
            // 2: 'Hardware Issue',
            // 3: 'Firmware upgrade',
            4: '购买咨询',
            5: '售后支持',
            6: '商务合作',
            // 7: 'Marketing & PR',
            // 8: 'Investment and Financing',
            9: '其他',
          },
          returnOptions: {
            1: '软件问题',
            2: '硬件问题',
            3: '固件问题',
            4: '维修服务',
          },
          firmwareOption: '检测不到',
          form1: {
            title: '主题',
            return: '售后问题类型',
            info: '基本信息',
            software: '软件',
            version: '软件/代码库版本',
            os: '操作系统',
            product: '产品',
            firmware: '固件版本',
            serial: '产品序列号',
            date: '购买日期',
            description: '内容',
            attachment: '附件',
//            file: `请您上传问题相关照片或视频；<span class="highlight-text">软件问题请务必上传log文件</span>，<a class="linktext" target="_blank" href="${config.HELP_UPLOAD_LOG_URL.cn}">点击这里</a>查看如何导出log文件`,
            file: '上传照片、zip格式压缩文件，文件大小不超过10M',
            or: '或',
            report: {
              upload: '上传报告',
              form: '手动填写',
            },
            file2: `请前往uArm Studio菜单栏 -> 帮助 -> 故障排查 -> 下载报告。将报告压缩为.zip文件上传。<br>提交报告后，您不需要再填写设备及软件的基本信息，如固件版本、操作系统版本等。`,
            other: '其他',
          },
          error: {
            title: '请输入主题',
            description: '请输入内容',
            descriptionLength: '内容不可少于5个字',
            type: '请选择问题类型',
            software: '请选择软件',
            os: '请选择操作系统',
            product: '请选择产品名称',
            firmware: '请选择固件版本',
            serial: '请输入产品序列号',
            report: '请上传报告',
          },
          hint: {
            input: '请输入',
            select: '请选择',
            date: '选择日期',
            upload: '点击上传',
            size: '文件大小不超过',
            serial: '位于uArm底部',
          },
          signin: '登录',
          register: '注册',
          email: '邮箱',
          emailHint: '请输入邮箱地址',
          password: '密码',
          repassword: '确认密码',
          remember: '自动登录',
          forget: '忘记密码？',
          switchRegister: '新用户？<strong> 点击注册</strong>',
          switchLogin: '老用户？<strong> 点击登录</strong>',
          birth: '出生日期',
          country: '国家',
          select: '选择',
          submit: '提交',
          cancel: '返回',
          emailSent: '邮件已发送！',
          emailSentText: '请点击邮件中的链接，设置新密码。',
          success: '提交成功！',
          confrim: 'OK',
          enterStudio: '进入uArm Studio',
				},
				en:{
          header: 'UFACTORY CUSTOMER CONSULTATION CENTER',
          after_title: 'Technical Support',
          co_title: 'Cooperation',
          pur_title: 'Purchase and Payment',
          first: 'Select the item you want to consult',
          loading: 'Please later....',
          category: {
            // 1: 'Software Problem',
            // 2: 'Hardware Issue',
            // 3: 'Firmware upgrade',
            4: 'Pre-sales Consultation',
            5: 'After-sales Service',
            6: 'Business Cooperation',
            // 7: 'Marketing & PR',
            // 8: 'Investment and Financing',
            9: 'Others',
          },
          returnOptions: {
            1: 'Software Problems',
            2: 'Hardware Problems',
            3: 'Firmware Problems',
            4: 'Repair Service',
          },
          firmwareOption: 'Not detected',
          form1: {
            title: 'Title',
            return: 'Request Type',
            info: 'Basic Info Report',
            software: 'Software',
            version: 'Software/Library Version',
            os: 'OS',
            product: 'Product',
            firmware: 'Firmware Version',
            serial: 'Serial No.',
            date: 'Purchase Date',
            description: 'Description',
            attachment: 'Attachment',
//            file: `Please provide photo/ video to describe the problem;<br><span class="highlight-text">For software issues please upload the log files</span>, <a class="linktext" target="_blank" href="${config.HELP_UPLOAD_LOG_URL.en}">click here</a> to check how to export the log files.`,
            file: 'Upload image/.zip file,less than 10MB.',
            or: 'or',
            report: {
              upload: 'upload report',
              form: 'fill out the form',
            },
            file2: `Please go to uArm Studio Menu Bar -> Help -> Troubleshoot -> Download Report.<br>Compress the report into .zip/.rar and upload.<br>With the report uploaded, you don’t need to fill in basic info like firmware version, OS version, etc.`,
            other: 'Other',
          },
          error: {
            title: 'Please input Title',
            description: 'Please input Description',
            descriptionLength: 'Length should be greater than 5',
            type: 'Please select Request Type',
            software: 'Please select Software',
            os: 'Please select Operation System',
            product: 'Please select Product Model',
            firmware: 'Please select Firmware Version',
            serial: 'Please input Serial number',
            report: 'Please upload report',
          },
          hint: {
            input: 'Please input',
            select: 'Select',
            date: 'Pick a day',
            upload: 'Click to upload',
            size: 'less than',
            serial: 'at the bottom of your uArm',
          },
          signin: 'SIGN IN',
          register: 'REGISTER',
          email: 'Email',
          emailHint: 'Please enter your email',
          password: 'Password',
          repassword: 'Confirm Password',
          remember: 'Keep me logged in',
          forget: 'Forget your password?',
          switchRegister: 'New here?<strong> REGISTER</strong>',
          switchLogin: 'Have an Account?<strong> SIGN IN</strong>',
          birth: 'Date of Birth',
          country: 'Country',
          select: 'Select',
          submit: 'Submit',
          cancel: 'Back',
          emailSent: 'Email Sent!',
          emailSentText: 'Please click the link in the email to reset password.',
          success: 'Successfully submitted!',
          confrim: 'OK',
          enterStudio: 'Enter uArm Studio',
				},
			};
      if(this.$route.params.lang==='en' || this.$route.params.lang==='cn'){
  			this.loginPage=langText[this.$route.params.lang];
			}
			else {
				this.loginPage=langText['cn'];
      }
      let msgs = this.loginPage.error;
      this.rules = {
        title: [
          { required: true, message: msgs.title, trigger: 'blur' },
        ],
        description: [
          { required: true, message: msgs.description, trigger: 'blur' },
          { min: 5, message: msgs.descriptionLength, trigger: 'blur' }
        ],
        return: [
          { required: true, message: msgs.type, trigger: 'change' }
        ],
        // software: [
        //   { required: true, message: msgs.software, trigger: 'change' }
        // ],
        os: [
          { required: true, message: msgs.os, trigger: 'change' }
        ],
        product: [
          { required: true, message: msgs.product, trigger: 'change' }
        ],
        firmware: [
          { required: true, message: msgs.firmware, trigger: 'change' }
        ],
        info: [
          { required: true, message: '', trigger: 'blur' }
        ],
      };

  },
  mounted() {
    //this.hosturl = 'http://192.168.31.127:9080';
    this.request.URL = `${config.hostURL}api/1.0/kf5/api`;
    this.request.email = sessionStorage.getItem('email');
    this.request.token = sessionStorage.getItem('loginToken');
    this.request.headers = {
      'Content-Type': 'application/json',
      'X-LC-Session': this.request.token,
    };
    this.getUserInfo();
    // console.log('log', this.loginState);
  },
  methods: {
    clearInput(name) {
      this.$refs[name].resetFields();
      if(this.$refs.upload && !this.$refs.upload1){
        this.$refs.upload.clearFiles();
      }else if(this.$refs.upload1 && !this.$refs.upload){
        this.$refs.upload1.clearFiles();
      }else{
        this.$refs.upload.clearFiles();
        this.$refs.upload1.clearFiles();
      }
    },
    httpRequest() {
      // override default http behavior
    },
    handleSuccess(response, file, fileList) {
      console.log('file upload success', response, file, fileList);
      this.fileTokens[file.uid] = response.data.attachment.token;
    },
    handleChange(file, fileList) {
//      console.log(file, fileList);
      this.show.submitDisable = true;
      let read = new FileReader();
      read.readAsBinaryString(file.raw);   //readAsBinaryString,readAsDataURL
      read.onloadend = () => {
//        console.log('file binary', read.result);
        let formData = new FormData();
        this.request.data = {
          method: 'POST',
          path: `/apiv2/attachments.json?filename=${file.raw.name}`,
          email: this.request.email,
//          params: read.result,
          headers: {
//            'Content-Type': 'application/binary',
            'Content-Type': 'application/binary', // application/binary, multipart/form-data, application/x-www-form-urlencoded
          },
        };
//        console.log('file binary2', read.result);
//        console.log("this.request.data", this.request.data);
        let requestKeys = Object.keys(this.request.data);
        for (let key of requestKeys) {
          formData.append(key, this.request.data[key]);
        }
        formData.append('upload', file.raw);
        let postConfig = {
          headers: {
            'X-LC-Session': this.request.token,
          }
        }
        this.$http.post(this.request.URL, formData, postConfig).then(response => {
//          console.log('file success', response);
          this.show.submitDisable = false;
          if (response.data.attachment) {
            this.fileTokens[file.uid] = response.data.attachment.token;
            this.fileIDs[file.uid] = response.data.attachment.id;
            if (this.checkFileType(file.raw.name, 'zip') || this.checkFileType(file.raw.name, 'rar')) {
              this.zipFileCount++;
            }
          }
          else {
            fileList.pop();
            this.$message(response.data.message);
            console.log("??", response.data.message);
          }
        }, response => {
          console.log('errorerror', response);
          this.show.submitDisable = false;
        });
      }
    },

//    handleChange(file, fileList){
//      this.show.submitDisable = true;
//      let read = new FileReader();
//      read.readAsArrayBuffer(file.raw);
////      console.log(read.result);
//      var formData = new FormData();
//      read.onerror = () => {
//        console.log("文件读取失败",read.result);
//      };
//      read.onload = () => {
//        console.log("文件读取成功",read.result);
//      };
//      read.onloadend = () => {
//        formData.append('file', file, `${file.raw.name}`);
//        this.request.data = {
//          method: 'POST',
//          path: `/apiv2/attachments.json?filename=${file.raw.name}`,
//          email: this.request.email,
//          params: read.result,
//          headers: {
//            'Content-Type': 'application/binary',
//          }
//        };
//        console.log(read.result);
//        console.log("this.request.data", this.request.data);
//      };
//      console.log(this.request.token);
//      this.$http.post(this.request.URL, this.request.data,{ headers: this.request.headers}).then(response => {
//        console.log(response.data)
//      });
//    },

    handleRemove(file, fileList) {
//      console.log(file, fileList);
      const fileID = this.fileIDs[file.uid];
      delete this.fileTokens[file.uid];
      delete this.fileIDs[file.uid];
      if (this.checkFileType(file.raw.name, 'zip') || this.checkFileType(file.raw.name, 'rar')) {
        this.zipFileCount--;
      }
      const requestData = {
        method: 'DELETE',
        path: `/apiv2/attachments/${fileID}.json`,
      };
      this.$http.post(this.request.URL, requestData, { headers: this.request.headers}).then(response => {
//        console.log(fileID, 'file on kf5 deleted', response);
      }, response => {
//        console.log('file on kf5 deleted failed', response);
      });
    },
    checkFileType(filename, extension) {
      return filename.split('.').pop() === extension;
    },
    reset(name) {
      this.category= '0';
      this.$refs[name].resetFields();
    },
    goBack(){
      this.$router.push({
        path:'question/'+this.$route.params.type,
        name:'question',
        params:{
          lang: this.$route.params.lang,
          module: this.$route.params.type
        }
      })
    },
    submit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          console.log('validate success!!');
          if (this.form1.info === 'report' && this.zipFileCount === 0 && this.policy) {
            this.$message(this.loginPage.error.report);
          }
          else {
            this.showLoading = true;
            this.show.submitDisable = true;
            this.sendRequest();
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    sendRequest() {
      let custom_fields = [
        {
          name: 'field_1003966', // 问题类型
          value: this.category,
        },
        {
          name: 'field_1004598', // 用户名
          value: this.userInfo.name,
        },
        {
          name: 'field_1004599', // 邮箱
          value: this.userInfo.email,
        },
        {
          name: 'field_1004600', // 性别
          value: this.userInfo.gender,
        },
        {
          name: 'field_1004601', // 出生日期
          value: this.userInfo.birthday,
        },
        {
          name: 'field_1004603', // 国家
          value: this.userInfo.country,
        },
        {
          name: 'field_1004604', // 城市
          value: this.userInfo.city,
        },
        {
          name: 'field_1004605', // 注册IP
          value: this.userInfo.ip,
        },
        {
          name: 'field_1004606', // 登录时间
          value: this.userInfo.login,
        },
      ];
      if (this.policy) {
        let add_fields = [
          {
            name: 'field_1003974', // 售后问题类型
            value: this.form1.return,
          },
          {
            name: 'field_1003972', // 使用软件
            value: this.form1.software,
          },
          {
            name: 'field_1003973', // 操作系统
            value: this.form1.os,
          },
          {
            name: 'field_1003976', // 产品型号
            value: this.form1.product,
          },
          {
            name: 'field_1003977', // 固件版本
            value: this.form1.firmware,
          },
          {
            name: 'field_1003978', // 产品序列号
            value: this.form1.serial,
          },
          {
            name: 'field_1003979', // 购买日期
            value: this.form1.date ? this.form1.date.toISOString().slice(0,10):'',
          },
          {
            name: 'field_1004513', // 软件或代码库版本
            value: this.form1.version,
          },
        ];
        custom_fields = [...custom_fields, ...add_fields];
      }
      const data = {
        method: 'POST',
        path: '/apiv2/requests.json',
        email: this.request.email,
        params: {
          request: {
            title: this.form1.title,
            comment: {
              content: this.form1.description,
              uploads: Object.values(this.fileTokens),
            },
            custom_fields,
          },
        }
      };
//      console.log(this.request.URL, data, this.request.headers);
      this.$http.post(this.request.URL, data, { headers: this.request.headers}).then(response => {
        if (response.data.error) {
//          console.log('error info', response);
          this.showLoading = false;
          this.show.submitDisable = false;
          this.$alert(response.data.message, response.data.error, {
            confirmButtonText: 'OK',
          });
        }
        else {
          this.showLoading = false;
          this.show.submitDisable = false;
          this.clearInput('form1');
          this.$message({
            type: 'success',
            message: this.loginPage.success,
            center: true,
          });
          // this.$alert(this.loginPage.success, '', {
          //   confirmButtonText: 'OK',
          // });
          // console.log('success', response);
        }
      }, response => {
        console.log('error', response);
      });
    },
    getUserInfo(){
      const url = `${config.hostURL}api/1.0/getuserinfo`;
      const options = {
        headers: {
          'X-LC-Session': sessionStorage.loginToken,
        },
      };
      this.$http.get(url, options).then(response => {
        const returnBack = response.data === undefined ? response : response.data;
        if( returnBack.code === 0){
          this.userInfo = {
            name: returnBack.info.nickname,
            email: returnBack.info.email,
            gender: returnBack.info.gender,
            birthday: returnBack.info.birthday,
            country: returnBack.info.country,
            city: returnBack.info.city,
            login: returnBack.info.updatedAt,
            ip: returnBack.info.register_ip,
          }
          // console.log('user info return:', this.userInfo);
        }
      }, response => {
      });
    },
  },
  watch: {
    '$route.params.page': function() {
      this.loginState = this.$route.params.page;
      // console.log('watch', this.$route.params.page);
    }
  },
  computed: {
    formPlus() {
      return this.category === this.form1.CATEGORY_VALUES['5'];
    },
  },
};

</script>

<style lang="sass" scoped>
 $themeOrange: #E27347;
.font-big{
  font-family: ufbigfont;
  color: $themeOrange;
  font-size: 24px;
}
.head{
  padding-bottom: 5%;
}
.ticket-select-wrapper{
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding: 50px 3% 20px;
  h5 {
    white-space: nowrap;
  }
  .signin-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  }
  .select-category {
    padding: 3% 5%;
    margin: 0 6% 6%;
  }
}
.loading {
  width: 100%;
  height: 100%;
  background: rgba(21,17,17,0.8);
  background-position: fixed;
  background-size: cover;
  position: fixed;
  top: 0;
  text-align: center;
  color: #fff;
  line-height: 50vw;
  font-size: 14px;
}

</style>
