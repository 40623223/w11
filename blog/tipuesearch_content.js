var tipuesearch = {"pages":[{"title":"About","text":"2017Fall 機械設計工程系 CADP & CP 課程倉儲: https://mde1a1.kmol.info/2017fall 課程投影片: https://mde1a1.kmol.info/2017fall/doc/trunk/index.html 課程網誌: https://mde1a1.kmol.info/2017fall/doc/trunk/blog/","tags":"misc","url":"https://cpb.kmol.info/40623223/doc/trunk/blog/pages/about/"},{"title":"CADP 第十週","text":"客製化可攜環境 影片","tags":"Course","url":"https://cpb.kmol.info/40623223/doc/trunk/blog/40623223_2017-fall-cp-w10.html"},{"title":"CADP 期中心得","text":"期中心得 影片","tags":"Course","url":"https://cpb.kmol.info/40623223/doc/trunk/blog/40623223_2017-fall-cp-w9.html"},{"title":"CADP 第八週","text":"W8 Exam 操作影片","tags":"Course","url":"https://cpb.kmol.info/40623223/doc/trunk/blog/40623223_2017-fall-cp-w8-exam.html"},{"title":"CADP 第七週","text":"W7 Exam 操作影片 學習心得 在經過這幾個禮拜的教學中學習到了以前鮮少接觸的電腦程式設計和倉儲系統,在上這門課前沒甚麼基本的概念,以為只是打打英文而已,沒想到這門課比我想像中的硬,再來的課程難度一定還會再上升,只要一落後可能就追不上了,總結來說不好好努力就等著吃土吧 自評成績 每週出席情況:100% 紙本筆記:70% 隨身碟內容:80% 個人倉儲內容:80% 各週上課摘要:70% 自評分數:80%","tags":"Course","url":"https://cpb.kmol.info/40623223/doc/trunk/blog/40623223_2017-fall-cp-w7-exam.html"},{"title":"2017 Fall CP 第五週","text":"W5 PyQt5 在網誌中使用 (pre class=\"brush: python\")(/pre) 標註可高亮度顯示 Python 語法, 並加上行數展示程式碼: #!/usr/bin/env python # 當系統安裝多套 Python 解譯器時可以利用上一行指定執行的 Python 版本 # 導入 math 模組 import math # 導入所需的 PyQt5 模組 from PyQt5.QtCore import Qt from PyQt5.QtWidgets import (QApplication, QGridLayout, QLayout, QLineEdit, QSizePolicy, QToolButton, QWidget) # 建立 Button 物件, 且繼承自 QToolButton 物件 class Button(QToolButton): ''' def __init__(self, text, parent=None): super(Button, self).__init__(parent) ''' # for Python 3 def __init__(self, text): super().__init__() self.setSizePolicy(QSizePolicy.Expanding, QSizePolicy.Preferred) self.setText(text) def sizeHint(self): size = super(Button, self).sizeHint() size.setHeight(size.height() + 20) size.setWidth(max(size.width(), size.height())) return size class Calculator(QWidget): NumDigitButtons = 10 ''' def __init__(self, parent=None): super(Calculator, self).__init__(parent) ''' def __init__(self): super().__init__() self.pendingAdditiveOperator = '' self.pendingMultiplicativeOperator = '' self.sumInMemory = 0.0 self.sumSoFar = 0.0 self.factorSoFar = 0.0 self.waitingForOperand = True self.display = QLineEdit('0') self.display.setReadOnly(True) self.display.setAlignment(Qt.AlignRight) self.display.setMaxLength(15) font = self.display.font() font.setPointSize(font.pointSize() + 8) self.display.setFont(font) self.digitButtons = [] for i in range(Calculator.NumDigitButtons): self.digitButtons.append(self.createButton(str(i), self.digitClicked)) self.pointButton = self.createButton(\".\", self.pointClicked) self.changeSignButton = self.createButton(u\"\\N{PLUS-MINUS SIGN}\", self.changeSignClicked) self.backspaceButton = self.createButton(\"Backspace\", self.backspaceClicked) self.clearButton = self.createButton(\"Clear\", self.clear) self.clearAllButton = self.createButton(\"Clear All\", self.clearAll) self.clearMemoryButton = self.createButton(\"MC\", self.clearMemory) self.readMemoryButton = self.createButton(\"MR\", self.readMemory) self.setMemoryButton = self.createButton(\"MS\", self.setMemory) self.addToMemoryButton = self.createButton(\"M+\", self.addToMemory) self.divisionButton = self.createButton(u\"\\N{DIVISION SIGN}\", self.multiplicativeOperatorClicked) self.timesButton = self.createButton(u\"\\N{MULTIPLICATION SIGN}\", self.multiplicativeOperatorClicked) self.minusButton = self.createButton(\"-\", self.additiveOperatorClicked) self.plusButton = self.createButton(\"+\", self.additiveOperatorClicked) self.squareRootButton = self.createButton(\"Sqrt\", self.unaryOperatorClicked) self.powerButton = self.createButton(u\"x\\N{SUPERSCRIPT TWO}\", self.unaryOperatorClicked) self.reciprocalButton = self.createButton(\"1/x\", self.unaryOperatorClicked) self.equalButton = self.createButton(\"=\", self.equalClicked) mainLayout = QGridLayout() mainLayout.setSizeConstraint(QLayout.SetFixedSize) mainLayout.addWidget(self.display, 0, 0, 1, 6) mainLayout.addWidget(self.backspaceButton, 1, 0, 1, 2) mainLayout.addWidget(self.clearButton, 1, 2, 1, 2) mainLayout.addWidget(self.clearAllButton, 1, 4, 1, 2) mainLayout.addWidget(self.clearMemoryButton, 2, 0) mainLayout.addWidget(self.readMemoryButton, 3, 0) mainLayout.addWidget(self.setMemoryButton, 4, 0) mainLayout.addWidget(self.addToMemoryButton, 5, 0) for i in range(1, Calculator.NumDigitButtons): row = ((9 - i) / 3) + 2 column = ((i - 1) % 3) + 1 mainLayout.addWidget(self.digitButtons[i], row, column) mainLayout.addWidget(self.digitButtons[0], 5, 1) mainLayout.addWidget(self.pointButton, 5, 2) mainLayout.addWidget(self.changeSignButton, 5, 3) mainLayout.addWidget(self.divisionButton, 2, 4) mainLayout.addWidget(self.timesButton, 3, 4) mainLayout.addWidget(self.minusButton, 4, 4) mainLayout.addWidget(self.plusButton, 5, 4) mainLayout.addWidget(self.squareRootButton, 2, 5) mainLayout.addWidget(self.powerButton, 3, 5) mainLayout.addWidget(self.reciprocalButton, 4, 5) mainLayout.addWidget(self.equalButton, 5, 5) self.setLayout(mainLayout) self.setWindowTitle(\"Calculator\") def digitClicked(self): clickedButton = self.sender() digitValue = int(clickedButton.text()) if self.display.text() == '0' and digitValue == 0.0: return if self.waitingForOperand: self.display.clear() self.waitingForOperand = False self.display.setText(self.display.text() + str(digitValue)) def unaryOperatorClicked(self): clickedButton = self.sender() clickedOperator = clickedButton.text() operand = float(self.display.text()) if clickedOperator == \"Sqrt\": if operand < 0.0: self.abortOperation() return result = math.sqrt(operand) elif clickedOperator == u\"x\\N{SUPERSCRIPT TWO}\": result = math.pow(operand, 2.0) elif clickedOperator == \"1/x\": if operand == 0.0: self.abortOperation() return result = 1.0 / operand self.display.setText(str(result)) self.waitingForOperand = True def additiveOperatorClicked(self): clickedButton = self.sender() clickedOperator = clickedButton.text() operand = float(self.display.text()) if self.pendingMultiplicativeOperator: if not self.calculate(operand, self.pendingMultiplicativeOperator): self.abortOperation() return self.display.setText(str(self.factorSoFar)) operand = self.factorSoFar self.factorSoFar = 0.0 self.pendingMultiplicativeOperator = '' if self.pendingAdditiveOperator: if not self.calculate(operand, self.pendingAdditiveOperator): self.abortOperation() return self.display.setText(str(self.sumSoFar)) else: self.sumSoFar = operand self.pendingAdditiveOperator = clickedOperator self.waitingForOperand = True def multiplicativeOperatorClicked(self): clickedButton = self.sender() clickedOperator = clickedButton.text() operand = float(self.display.text()) if self.pendingMultiplicativeOperator: if not self.calculate(operand, self.pendingMultiplicativeOperator): self.abortOperation() return self.display.setText(str(self.factorSoFar)) else: self.factorSoFar = operand self.pendingMultiplicativeOperator = clickedOperator self.waitingForOperand = True def equalClicked(self): operand = float(self.display.text()) if self.pendingMultiplicativeOperator: if not self.calculate(operand, self.pendingMultiplicativeOperator): self.abortOperation() return operand = self.factorSoFar self.factorSoFar = 0.0 self.pendingMultiplicativeOperator = '' if self.pendingAdditiveOperator: if not self.calculate(operand, self.pendingAdditiveOperator): self.abortOperation() return self.pendingAdditiveOperator = '' else: self.sumSoFar = operand self.display.setText(str(self.sumSoFar)) self.sumSoFar = 0.0 self.waitingForOperand = True def pointClicked(self): if self.waitingForOperand: self.display.setText('0') if \".\" not in self.display.text(): self.display.setText(self.display.text() + \".\") self.waitingForOperand = False def changeSignClicked(self): text = self.display.text() value = float(text) if value > 0.0: text = \"-\" + text elif value < 0.0: text = text[1:] self.display.setText(text) def backspaceClicked(self): if self.waitingForOperand: return text = self.display.text()[:-1] if not text: text = '0' self.waitingForOperand = True self.display.setText(text) def clear(self): if self.waitingForOperand: return self.display.setText('0') self.waitingForOperand = True def clearAll(self): self.sumSoFar = 0.0 self.factorSoFar = 0.0 self.pendingAdditiveOperator = '' self.pendingMultiplicativeOperator = '' self.display.setText('0') self.waitingForOperand = True def clearMemory(self): self.sumInMemory = 0.0 def readMemory(self): self.display.setText(str(self.sumInMemory)) self.waitingForOperand = True def setMemory(self): self.equalClicked() self.sumInMemory = float(self.display.text()) def addToMemory(self): self.equalClicked() self.sumInMemory += float(self.display.text()) def createButton(self, text, member): button = Button(text) button.clicked.connect(member) return button def abortOperation(self): self.clearAll() self.display.setText(\"####\") def calculate(self, rightOperand, pendingOperator): if pendingOperator == \"+\": self.sumSoFar += rightOperand elif pendingOperator == \"-\": self.sumSoFar -= rightOperand elif pendingOperator == u\"\\N{MULTIPLICATION SIGN}\": self.factorSoFar *= rightOperand elif pendingOperator == u\"\\N{DIVISION SIGN}\": if rightOperand == 0.0: return False self.factorSoFar /= rightOperand return True if __name__ == '__main__': import sys app = QApplication(sys.argv) calc = Calculator() calc.show() sys.exit(app.exec_())","tags":"Course","url":"https://cpb.kmol.info/40623223/doc/trunk/blog/40623223-2017-fall-cp-w5.html"},{"title":"網際 Brython 3.3.4 程式執行環境 第四週","text":"Brython 程式環境可以用來練習許多 Python3 的簡單語法, 也可以納入 Javascript 程式庫, 利用 Ajax 模式結合網際瀏覽器與伺服器上的資源解決協同產品設計流程上的問題. window.onload=function(){ brython({debug:1, pythonpath:['./../data/py']}); } 利用以下的編輯器執行 Python3 程式 在 Firefox 中, 以 Preferences - General - Downloads 選擇 \"Always ask me where to save files\" 在 Chrome 中, 以 Settings - Advanced - Downloads 選擇 Ask where to save each file before downloading function doSave(){ var blob = new Blob([localStorage[\"py_src\"]], {type: \"text/plain;charset=utf-8\"}); filename = document.getElementById('filename').value saveAs(blob, filename+\".py\"); } import sys import time import traceback import javascript from browser import document as doc, window, alert has_ace = True try: editor = window.ace.edit(\"editor\") session = editor.getSession() session.setMode(\"ace/mode/python\") editor.setOptions({ 'enableLiveAutocompletion': True, 'enableSnippets': True, 'highlightActiveLine': False, 'highlightSelectedWord': True }) except: from browser import html editor = html.TEXTAREA(rows=20, cols=70) doc[\"editor\"] <= editor def get_value(): return editor.value def set_value(x):editor.value = x editor.getValue = get_value editor.setValue = set_value has_ace = False if hasattr(window, 'localStorage'): from browser.local_storage import storage else: storage = None def reset_src(): if storage is not None and \"py_src\" in storage: editor.setValue(storage[\"py_src\"]) else: editor.setValue('for i in range(10):\\n\\tprint(i)') editor.scrollToRow(0) editor.gotoLine(0) def reset_src_area(): if storage and \"py_src\" in storage: editor.value = storage[\"py_src\"] else: editor.value = 'for i in range(10):\\n\\tprint(i)' class cOutput: def __init__(self,target): self.target = doc[target] def write(self,data): self.target.value += str(data) #if \"console\" in doc: sys.stdout = cOutput(\"console\") sys.stderr = cOutput(\"console\") def to_str(xx): return str(xx) info = sys.implementation.version doc['version'].text = 'Brython %s.%s.%s' % (info.major, info.minor, info.micro) output = '' def show_console(ev): doc[\"console\"].value = output doc[\"console\"].cols = 60 doc[\"console\"].rows = 10 # load a Python script def load_script(evt): _name = evt.target.value + '?foo=%s' % time.time() editor.setValue(open(_name).read()) # run a script, in global namespace if in_globals is True def run(*args): global output doc[\"console\"].value = '' src = editor.getValue() if storage is not None: storage[\"py_src\"] = src t0 = time.perf_counter() try: #ns = {'__name__':'__main__'} ns = {'__name__':'editor'} exec(src, ns) state = 1 except Exception as exc: traceback.print_exc(file=sys.stderr) state = 0 output = doc[\"console\"].value print('<completed in %6.2f ms>' % ((time.perf_counter() - t0) * 1000.0)) return state if has_ace: reset_src() else: reset_src_area() def clear_console(ev): doc[\"console\"].value = \"\" def clear_container(ev): doc[\"container\"].clear() doc['run'].bind('click',run) doc['show_console'].bind('click',show_console) doc['clear_console'].bind('click',clear_console) doc['clear_container'].bind('click',clear_container) Filename: .py Run Output 清除 清除畫布","tags":"Course","url":"https://cpb.kmol.info/40623223/doc/trunk/blog/40623223-brython-editor-334.html"},{"title":"2017 Fall CADP 第三週 - Fossil SCM & 網誌及投影片","text":"截至本週, 各學員的 Fossil SCM 倉儲已經可以透過 Wiki 儲存各週數位筆記, 並利用 Files 中的 Pelican Blog 與 Reveal.js 投影片架構, 提供各週詳細的學習報告. 使用 Fossil SCM 管理各學員的網誌與投影片的目的, 在建立往後進行協同設計所需的基本架構. 設計組態管理 組態 (Configuration) 為組成內容與狀態的配置, 因此軟體組態管理 (SCM, Software Configuration Management) 就是針對軟體開發過程, 有關組成內容與狀態配置的管理. 由於機械設計主要在表達其固體、流體與軟體元件間的互動配置, 且可交付內容包含口語、文字、2D、3D、數學與實體表達資料, 因此機械設計流程中採用組態管理系統的目的, 就是希望參與機械設計的所有成員, 利用組態管理工具, 有效管理設計過程中所衍生的各種資料內容與配置, 並完整呈現各設計階段的歷程與狀態, 以方便追蹤設計變更並據以持續改進. 學習要點: 如何維護 Fossil SCM Wiki 內容 如何 clone 倉儲, 如何 open 倉儲 如何在近端利用 Leo Editor 維護並檢視網誌及投影片 如何利用網際投影片呈現六種表達資料 如何利用網誌呈現六種表達資料 Solvespace Nutcracker 零組件繪圖 學習如何在工作平面中繪製 2D 機構模擬圖 學習如何在不同工作面中, 繪製 2D 輪廓, 進行實體長出或除料 學習如何切換繪圖群組 (Group), 修改各階段繪圖內容, 完成所需的零組件 學習如何繪製旋轉長出實體 學習如何建立新的工作平面 學習如何利用點線面約束, 將實體零組件與 2D 機構模擬圖結合, 完成平面連桿機構運動模擬, 並輸出特定點的運動軌跡","tags":"Course","url":"https://cpb.kmol.info/40623223/doc/trunk/blog/40623223_2017-fall-cp-w3.html"},{"title":"2017 Fall CADP 第二週","text":"本學期起各班透過一台 Ubuntu 16.04 主機, 建立 Fossil SCM 伺服器, 且每一學員發放一個 Fossil SCM 倉儲, 其中各學員可以利用 Wiki 與 Technote 紀錄學習資料外, 還可以將靜態網誌與簡報檔案放入 Files 資料區. 測試沒有綁定帳號後, 指定帳號新增提交推送版本. 測試 commit 時沒有 --user-override 4062 測試 push 才綁帳號 configuration - 組成內容與狀態 scm - software configuration management batch - 批次 remark - 註解 default - 內定, 默認 fossil clone - 克隆 fossil add - 新增 fossil commit - 提交 fossil push - 推送 fossil remote-url off fossil ui - user interface url - uniform resource locator https - secure hypertext transfer protocol protocol - 協定 certification - 簽章 - public key server certify - 認證 vacuum - 吸塵 fossil clone https://mde1a1.kmol.info/pymcadp pymcadp.fossil IDE - Integrated Development Environment 希望為每位學員建立倉儲的設想流程如下: 各學員可以獨立維護倉儲內容, 也可以在總管理員的權限下, 為分組學員建立帳號, 逐步導入協同設計 各學員的倉儲以修課班級命名伺服器, 以學號命名倉儲, 方便依照此一規律擷取各學員的倉儲頁面. 各學員能以電子郵件收到與新建倉儲相關的連結, 以及帳號密碼. 必須擴增 Ubuntu ulimits -n 同時開檔的設限範圍 (內定只允許同時開啟 1024 個檔案) 解決方案: 主機名稱可以透過 domain dns 中的 CNAME 別名方式處理, 因為目前所能提供出來的 IPv4/IPv6 雙支援主機, 之前已經都設定了符號名稱. fossil init 雖然提供指定管理者的 -A 選項功能, 但是無法直接指定管理者對應密碼, 因此必須建立倉儲之後, 再利用 fossil user 修改密碼, 之後再利用 Gmail 寄出通知信, 其中提供倉儲連結, 登入帳號與密碼等資訊. 建立各學員倉儲檔案的程式如下, 如前所述, 主要透過兩個 Fossil SCM 指令完成, 在 Windows 採用 Fossil SCM 2.3 版建立所有 .fossil 倉儲時, 將同時以 email 通知各學員. 各學員的 .fossil 檔案再以 sftp 送到伺服主機對應帳號所屬的目錄下. 必須要特別注意的是, 採用 Fossil SCM 2.3 版所建立的 .fossil 倉儲檔案, 在 Ubuntu 操作系統上也必須採用相同版本的 fossil, 否則舊版 fossil 可能無法開啟新版 fossil 程式所建立的倉儲檔. import os import string import random # 使用 Gmail 寄信必須導入下列模組 import smtplib import re from email.mime.text import MIMEText from email.header import Header # 用來以亂數建立密碼的韓式 def id_generator(size=6, chars=string.ascii_uppercase + string.digits): ''' source: https://stackoverflow.com/questions/2257441/random-string-generation-with-upper-case-letters-and-digits-in-python ''' return ''.join(random.choice(chars) for _ in range(size)) # 讀取學員名單, 逐一取得學員學號, 學員名單, 檢查點 1/7 student_data = open(\"2017fall_list/1b.txt\").read() student_list = student_data.splitlines() # 利用 gmail smtp 功能寄信 server = smtplib.SMTP('smtp.gmail.com:587') server.ehlo() server.starttls() # 以下必須準備好對應郵件帳號與密碼的外部檔案, 所提供的寄信帳號, 是否可以寄信, 檢查點 2/7 ''' 寄信之前必須到 https://www.google.com/settings/security/lesssecureapps 修改權限, 改為較低安全權限 否則無法使用程式寄信! ''' # 從外部檔案讀取要用來寄信的 gmail 帳號與密碼 # mail.txt 格式為: 電子郵箱,對應密碼, 以逗點隔開, 檢查點 3/7 email_data = open(\"z:/2017fall/mail.txt\").read() email, email_password= email_data.split(\",\") print(email, email_password) # 是否登入所提供寄信的電子郵箱, 4/7 server.login(email, email_password) # 不同課程名稱, 與對應主機名稱, 必須配合修改 5/7 course_title = \"計算機程式\" fossil_server = \"cpb.kmol.info\" for student_num in student_list: username = student_num repository = username + '.fossil' # 利用所提供的字串, 以亂數組成六個字元的密碼 password = id_generator(6, \"23456789abcdef\") print(student_num, \", \" , password) # 執行 dos command 指令, 建立倉儲 os.system(\"fossil init -A \" +username + \" \" + repository) print(\"已經建立倉儲 \" + repository) # 執行 dos command 指令, 修改使用者密碼 os.system(\"fossil user password \" + username + \" \" + password + \" -R \" + repository) print(\"已經修改密碼\") # 利用 Gmail 寄信, 告知各學員倉儲連結與帳號密碼 # 每一位學員收到的 output 都從這裡 reset output = \"\" # 若學號欄為空, 則不寄信 if student_num != \"\": # output 為寄給每一位學員的資料表格 mail_content = student_num+' 您好: 您在 '+course_title+' 課程中的區域網路倉儲: https://'+fossil_server+'/'+student_num+' ' mail_content += '管理帳號為:'+ student_num + ' 管理密碼為: '+ password+' ' print(student_num) print(mail_content) # 至此 mail_content 已經確定 # 在測試與實際寄送資料, 也必須配合修改, 檢查點 6/7 receiver_email = student_num + \"@gm.nfu.edu.tw\" # 測試用 #receiver_email = student_num+\"@mde.tw\" # 列出收信人 email 位址 #print(receiver_email) #message= MIMEText(mail_content,'plain','UTF-8') # 以 html 格式寄信 message= MIMEText(mail_content,'html','UTF-8') message['Subject'] = Header(course_title+\" Fossil SCM 帳號通知\", 'UTF-8') # 可以先不寄信, 確定格式正確後再開啟, 是否實際寄出信件, 檢查點 7/7 server.sendmail(\"gmail_address\", receiver_email, message.as_string()) server.quit() 各班所完成的主機: 二甲電腦輔助設計實習: https://cadpa.kmol.info 二乙電腦輔助設計實習: https://cadpb.kmol.info 一甲計算機程式: https://cpa.kmol.info 一乙計算機程式: https://cpb.kmol.info","tags":"Course","url":"https://cpb.kmol.info/40623223/doc/trunk/blog/40623223_2017-fall-cp-w2.html"}]};