(function ($) {
    function AutoLeadWidget() {
        this._frameId = 'lead-widget-frame';
        this._frameContainerId = 'lead-widget-container';
        this.loadingImage = 'data:image/gif;base64,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'
        this.loaderId = 'widget-loader';
        this._settings = {
            backgroundColor: "#dfdfdf",
            effect: "slide",
            width: '100%'
        };

        this.car_make = {};

        this.car_model = {};

        this.car_state = {
            'Alabama': 'Alabama (AL)',
            'Alaska': 'Alaska (AK)',
            'Arizona': 'Arizona (AZ)',
            'Arkansas': 'Arkansas (AR)',
            'California': 'California (CA)',
            'Connecticut': 'Connecticut (CT)',
            'Delaware': 'Delaware (DE)',
            'District of Columbia': 'District of Columbia (DC)',
            'Florida': 'Florida (FL)',
            'Georgia': 'Georgia (GA)',
            'Hawaii': 'Hawaii (HI)',
            'Idaho': 'Idaho (ID)',
            'Illinois': 'Illinois (IL)',
            'Indiana': 'Indiana (IN)',
            'Iowa': 'Iowa (IA)',
            'Kansas': 'Kansas (KS)',
            'Kentucky': 'Kentucky (KY)',
            'Louisiana': 'Louisiana (LA)',
            'Maine': 'Maine (ME)',
            'Maryland': 'Maryland (MD)',
            'Massachusetts': 'Massachusetts (MA)',
            'Michigan': 'Michigan (MI)',
            'Minnesota': 'Minnesota (MN)',
            'Mississippi': 'Mississippi (MS)',
            'Missouri': 'Missouri (MO)',
            'Montana': 'Montana (MT)',
            'Nebraska': 'Nebraska (NE)',
            'Nevada': 'Nevada (NV)',
            'New Hampshire': 'New Hampshire (NH)',
            'New Jersey': 'New Jersey (NJ)',
            'New Mexico': 'New Mexico (NM)',
            'New York': 'New York (NY)',
            'North Carolina': 'North Carolina (NC)',
            'North Dakota': 'North Dakota (ND)',
            'Ohio': 'Ohio (OH)',
            'Oklahoma': 'Oklahoma (OK)',
            'Oregon': 'Oregon (OR)',
            'Pennsylvania': 'Pennsylvania (PA)',
            'Rhode Island': 'Rhode Island (RI)',
            'South Carolina': 'South Carolina (SC)',
            'South Dakota': 'South Dakota (SD)',
            'Tennessee': 'Tennessee (TN)',
            'Texas': 'Texas (TX)',
            'Utah': 'Utah (UT)',
            'Vermont': 'Vermont (VT)',
            'Virginia': 'Virginia (VA)',
            'Washington': 'Washington (WA)',
            'West Virginia': 'West Virginia (WV)',
            'Wisconsin': 'Wisconsin (WI)',
            'Wyoming': 'Wyoming (WY)'
        };

        this.step_data = {
            car_year: '',
            car_make: '',
            car_model: '',
            car_name: '',
            inc_company: '',
            inc_premium: ''
        };

        this.inc_company = {
            '21st Century Insurance': '21st Century Insurance',
            'AAA Insurance Co.': 'AAA Insurance Co.',
            'Allied': 'Allied',
            'Allstate Insurance': 'Allstate Insurance',
            'American Family Insurance': 'American Family Insurance',
            'American National Insurance': 'American National Insurance',
            'Amica Insurance': 'Amica Insurance',
            'Cotton States Insurance': 'Cotton States Insurance',
            'Country Financial': 'Country Financial',
            'Erie Insurance Company': 'Erie Insurance Company',
            'Esurance': 'Esurance',
            'Farm Bureau': 'Farm Bureau',
            'Farmers Insurance': 'Farmers Insurance',
            'GEICO': 'GEICO',
            'GMAC Insurance': 'GMAC Insurance',
            'Independent Agency': 'Independent Agency',
            'Infinity Insurance': 'Infinity Insurance',
            'Liberty Mutual Insurance Company': 'Liberty Mutual Insurance Company',
            'Mercury': 'Mercury',
            'Metropolitan Insurance Co.': 'Metropolitan Insurance Co.',
            'Nationwide': 'Nationwide',
            'Other': 'Other',
            'Plymouth Rock': 'Plymouth Rock',
            'Progressive Insurance': 'Progressive Insurance',
            'SAFECO': 'SAFECO',
            'Sentry Insurance Company': 'Sentry Insurance Company',
            'Shelter Insurance Company': 'Shelter Insurance Company',
            'State Farm': 'State Farm',
            'The Hartford': 'The Hartford',
            'The Hartford AARP': 'The Hartford AARP',
            'Travelers Insurance Company': 'Travelers Insurance Company',
            'Unitrin Direct': 'Unitrin Direct',
            'US Health Advisors': 'US Health Advisors',
            'USAA': 'USAA'
        };

        this.steps = {
            step_1: {
                button_id: '#submit_lead_car_info',
                step_name: 'car_info',
                fields: {
                    1: {
                        name: 'car_year',
                        id: '#car_year',
                        required: true,
                        message: 'Please select car year'
                    },
                    2: {
                        name: 'car_make',
                        id: '#car_make',
                        required: true,
                        message: 'Please select car make'
                    },
                    3: {
                        name: 'car_model',
                        id: '#car_model',
                        required: true,
                        message: 'Please select car model'
                    }
                }
            },
            step_2: {
                button_id: '#submit_lead_car_state',
                step_name: 'car_state',
                fields: {
                    1: {
                        name: 'car_state',
                        id: '#car_state',
                        required: true,
                        message: 'Please select state'
                    }
                }
            },

            step_3: {
                button_id: '#submit_lead_insurance_info',
                step_name: 'insurance_info',
                fields: {
                    1: {
                        name: 'inc_company',
                        id: '#inc_company',
                        required: true,
                        message: 'Please select insurance company'
                    },

                    2: {
                        name: 'inc_premium',
                        id: '#inc_premium',
                        required: true,
                        message: 'Please input your current premium'
                    }
                }
            },
            step_4: {
                button_id: '#submit_lead_insurance_compare',
                step_name: 'insurance_compare',
                fields: {
                    1: {
                        name: 'other_company',
                        id: '#other_company',
                        required: false
                    }
                }
            }
        };
    }

    $.extend(AutoLeadWidget.prototype, {
        setDefaults: function (settings) {
            $.extend(this._settings, settings);
        },
        _set_initial_widget: function (target, inst) {
            var style = this._get_style(inst) + '; ';
            var frame = '<div class="lead-frame-wrapper" id="' + this._frameId + '"> <div class="lead-frame-container" id="' + this._frameContainerId + '"></div></div>';
            frame += '<style>';
            frame += '.lead-frame-wrapper {' + style + 'color: #333; font-size: 14px; font-family: "Lato", Helvetica, Arial, sans-serif; padding: 75px; background-color: #f6f6f6;}';
            frame += '.lead-frame-wrapper * { box-sizing: border-box; } ';
            frame += '.lead-frame-container { overflow: hidden; width: 70%; } ';
            frame += '.lead-frame-container .custom-title { font-family: "Lato"; font-size: 50px; font-weight: lighter; margin: 5px 0 35px; color: #252525; text-align: left; } ';
            frame += '.lead-frame-container .title-slogan { font-size: 20px; font-weight: lighter; color: #878787; line-height: 1.5; margin-bottom: 35px; }';
            frame += '.lead-frame-container .info-title { font-size: 20px; font-weight: bold; color: #878787; line-height: 1.5; margin-bottom: 10px; }';
            frame += '.lead-frame-container .info-title-green {color: #37c7b4;}';
            frame += '.lead-frame-container .custom-small-title { font-size: 20px; font-weight: bold; line-height: 1.1; margin: 5px 0 8px; color: #292929; text-align: left; } ';
            frame += '.lead-frame-container select { font-size: 20px; font-family: open-sans; color: #b2b1b1; border: 1px solid #cccccc; margin: 9px 0; max-width: 548px; padding: 19px; width: 100%; border-radius: 8px; -webkit-appearance: none; -moz-appearance: none; appearance: none; cursor: pointer; height: 76px; background: white url("images/down-arrow.png") no-repeat scroll 100% center / 14% auto; }';
            frame += '.lead-frame-container input[type=text] { width: 100%; max-width: 150px; margin-bottom: 8px; height: 30px; padding: 4px 6px; } ';
            frame += '.lead-frame-container .lead-frame-btn { background-color: #168abe; border: 1px solid #2e6da4; border-radius: 4px; color: #ffffff; cursor: pointer; font-size: 18px; font-weight: bold; margin: 24px 0 0 -1%; padding: 15px 25px; width: 126px; height: 50px; float: left; clear: both; text-decoration: none; }';
            frame += '.lead-frame-container .align-right { float: right; } .lead-frame-container .align-left { float: left; } ';
            frame += '.lead-frame-container label.regular-checkbox-label { display: inline; } .lead-frame-container .regular-checkbox { display: none; }';
            frame += '.lead-frame-container .regular-checkbox + label { background-color: #fafafa; border: 1px solid #cacece; box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05); padding: 9px; border-radius: 3px; display: inline-block; position: relative; margin: 0 7px 5px 5px; } ';
            frame += '.lead-frame-container .regular-checkbox + label:active, .lead-frame-container .regular-checkbox:checked + label:active { box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px 1px 3px rgba(0,0,0,0.1); } ';
            frame += '.lead-frame-container .regular-checkbox:checked + label { background-color: #e9ecee; border: 1px solid #adb8c0; box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1); color: #99a1a7; } ';
            frame += '.lead-frame-container .regular-checkbox:checked + label:after { content: "\u2714"; font-size: 14px; position: absolute; top: 0px; left: 3px; color: #99a1a7; } ';
            frame += '</style>';
            $(target).html(frame);
        },

        _get_style: function (inst) {
            return "background:" + this._get(inst, 'backgroundColor') + "; position: relative; width:" + this._get(inst, 'width');
        },

        _get: function (inst, name) {
            return inst.settings[name] !== undefined ?
                inst.settings[name] : this._settings[name];
        },

        _generate_slider: function (container, inst) {
            container.append(this._car_frame());
            container.append(this._state_frame());
            container.append(this._insurance_frame());
        },

        callback: function (element) {
            console.log('i am calling');
        },

        _showLeadWidget: function (target, inst) {
            this._set_initial_widget(target, inst);
            var container = $("#" + this._frameContainerId);
            this._generate_slider(container, inst);
            this._bindActions(target, inst);
        },

        _frame_template: function (step, name, html) {
            var style = 'display: block;';
            if (step > 1)
                style = 'display: none;';
            temp = '<div id="step_' + step + '" class="step-wrapper" style="position: relative; ' + style + '">';
            temp += html;
            temp += '<div style="position: relative; padding: 0 15px; text-align: center;">';
            // if (step > 1)
            //     temp += '<button id="lead_back_step_' + step + '" class="lead-frame-btn btn-back align-left">Back</button>';
            if (step == 1)
                temp += '<button name="' + name + '" id="submit_lead_' + name + '" class="lead-frame-btn">Continue</button>';
            else if (step < 4)
                temp += '<button name="' + name + '" id="submit_lead_' + name + '" class="lead-frame-btn">Continue</button>';

            temp += '<div style="clear: both;"></div>';
            temp += '</div></div>';
            return temp;
        },

        _car_frame: function () {
            var years = [];
            var current_year = new Date().getFullYear();
            for (var n = current_year; n >= 2000; --n) {
                years.push(n);
            }
            html = '<h3 class="custom-title">See how much you could be saving</h3>';
            html += '<h5 class="title-slogan">Compare your current auto insurance rate with other companies in your area and <br> see if you qualify for any discounts!</h5>';
            html += '<h4 class="custom-small-title">What car do you drive?</h4>';
            car_year = this._select_field(years, 'car_year', 'car_year', 'car_year', 'Select Year');
            car_make = this._select_field(this.car_make, 'car_make', 'car_make', 'car_make', 'Select Make', 'cursor: not-allowed;');
            car_model = this._select_field(this.car_model, 'car_model', 'car_model', 'car_model', 'Select Model', 'cursor: not-allowed;');
            html += '<div>' + car_year + car_make + car_model + '</div>';
            return this._frame_template('1', 'car_info', html);
        },

        _state_frame: function (inst) {
            html = '<h3 class="custom-title"> See how much you could be saving </h3>';
            html += '<h6 class="info-title">Your vehicle</h6>';
            html += '<strong>' + this.step_data['car_year'] + ' ' + this.step_data['car_make'] + ' ' + this.step_data['car_model'] + '</strong>';
            car_state = this._select_field(this.car_state, 'car_state', 'car_state', 'car_state', 'Select State', '');
            html += '<div>' + car_state + '</div>';
            return this._frame_template('2', 'car_state', html);
        },


        _insurance_frame: function (inst) {
            html = '<h3 class="custom-title"> See how much you could be saving </h3>';
            html += '<div style="width: 100%;>';
            html += '<div style="width: 250px; float:left;">' + '<h6 class="info-title">Your vehicle</h6>' ;
            html += '<h6 class="info-title info-title-green" style=" text-align: left; margin-top: 0;">Honda Civic</h6>';
            html += '</div>';
            html += '<div style="width: 250px; float: right;">';
            html += '<h6 class="info-title">State</h6>';
            html += '<h6 class="info-title info-title-green">Caliifornia</h6>' + '</div>';
            html += '</div>';
            inc_company = this._select_field(this.inc_company, 'inc_company', 'inc_company', 'inc_company', 'Select', '');
            premium = this._text_field('inc_premium', 'inc_premium', 'inc_premium', '');
            html += '<div>' +
                "<p> Your current insurance company </p>" + inc_company +
                "<p>Your current premium (per month)</p>" + premium + '</div>';
            return this._frame_template('3', 'insurance_info', html);
        },

        _comparison_frame: function () {
            header = '<h4 class="custom-small-title"> Your information </h3>';
            info = '<p style="margin: 0 0 8px;"><strong> Car: </strong>' + this.step_data['car_year'] + ' ' + this.step_data['car_make'] + ' ' + this.step_data['car_model'];
            info += '<br/><strong> State: </strong>' + this.step_data['car_state'];
            info += '<br/><strong> Insurance Company: </strong>' + this.step_data['inc_company'] + '</p>';
            header_2 = '<h4 class="custom-small-title"> Try how much you could save </h3>';

            discount_services = "<div class='discount-services' style='display: inline-block;'> </div>";
            other_company_list = this.inc_company;
            delete other_company_list[this.step_data['inc_company']];

            other_com = "<p style='margin: 0 0 8px;'> Select other insurance company </p>" + this._select_field(other_company_list, 'other_company', 'other_company', 'other_company', 'Select', 'width: 200px;');
            com_result = this._get_compare_result(this.step_data['inc_premium']);

            container_width = $('#' + this._frameContainerId).width();
            if (container_width < 330) {
                width = '100%';
            }
            else {
                width = '50%';
            }
            html = header + info + header_2;
            html += '<div style="position: relative;"><div style="width: ' + width + '; float: left; min-width: 160px; margin-top: 10px;">' + other_com + discount_services + '</div>';
            html += '<div style="width: ' + width + '; float: right; min-width: 160px; margin-top: 10px;">' + com_result + '</div><div style="clear: both"></div></div>';
            html += '<div style="text-align: center; margin: 18px 0 10px;"><a href="https://smartfinancial.com/auto-insurance" target="_blank" class="btn-continue">Check rates</a></div>';
            return this._frame_template('4', 'insurance_compare', html);
        },

        _get_compare_result: function (amount) {
            monthly = parseFloat(amount);
            yearlly = monthly * 12.0;
            html = '<div style="width: 100%; background-color: #5782b6; border-radius: 5px; padding: 10px;">';
            html += '<p style="font-size: 18px; font-weight: bold; margin: 0; color: #fff;">Your current premium</p>';
            html += '<p style="font-size: 20px; font-weight: bold; margin: 0; color: #fff">$' + monthly.toFixed(2)
                + '<span style="font-size: 14px; color: #dbdbdb"> /monthly</span></p>';
            html += '<p style="color: #dbdbdb; margin: 0;"> (or $' + yearlly.toFixed(2) + ' /annually) </p>';
            html += '<div id="lead-premium-savings-box" style="display: none">';
            html += '<p style="font-size: 18px; font-weight: bold; margin: 6px 0 0; color: #fff;">Your possible premium</p>';
            html += '<p style="font-size: 22px; color: #a7fafd; font-weight: bold; margin: 0;">$<span style="font-size: 22px;color: #a7fafd;" id="lead-monthly-premium"></span><span style="font-size: 14px; color: #dbdbdb"> /monthly</span></p>';
            html += '<p style="color: #dbdbdb; margin: 0;"> (or $<span style="color: #dbdbdb;" id="lead-yearly-premium"></span> /annually) </p>';
            html += '<p style="font-size: 18px; font-weight: bold; margin: 6px 0 0; color: #fff;">Your possible savings</p>';
            html += '<p style="font-size: 20px; font-weight: bold; margin: 0; color: #fff"><span style="font-size: 20px; color: #fff" id="lead-premium-savings"></span>%</p>';
            html += '</div></div>';
            return html;
        },

        _get_discount_services: function (options) {
            var discounts = {
                1: {text: 'Multiple drivers', weight: 7},
                2: {text: 'No accidents', weight: 8},
                3: {text: 'Good GPA', weight: 6.5},
                4: {text: '10+ years of experience', weight: 10},
                5: {text: '5+ Family', weight: 7.2},
                6: {text: 'Air bag', weight: 4}
            },
            html = '<p style="margin: 0 0 6px;"> Check discounts to see the possible savings: </p>';
            $.each(discounts, function (key, value) {
                html += '<div style="display: inline-flex;">';
                html += '<input type="checkbox" class="check-discount regular-checkbox" id="lead-discount-' + key + '" value="' + value.weight + '">';
                html += '<label class="regular-checkbox-label" for="lead-discount-' + key + '"/>';
                html += '<span style="font-weight: normal;"> ' + value.text + '</span></div><br/>';
            });
            return html;
        },

        _select_field: function (options, name, id, klass, prompt, style) {
            opt = '';
            for (var key in options) {
                value = $.isArray(options) ? options[key] : key;
                opt += "<option value='" + value + "'>" + options[key] + "</option>";
            }
            if (prompt != '') {
                opt = "<option value=''>" + prompt + "</option>" + opt;
            }
            return "<select name='" + name + "' id='" + id + "' class='" + klass + "' style='" + style + "' >" + opt + "</select>";
        },

        _button_field: function (name, id, klass, text) {
            return "<div style='text-align: center;'><button name='" + name + "' id='" + id + "' class='" + klass + "'>" + text + "</button></div>"
        },

        _text_field: function (name, id, klass, style) {
            return "<input type='text' name='" + name + "' id='" + id + "' class='" + klass + "' style='" + style + "'/>";
        },

        _call_loader: function (state) {
            html = "<div style='position: absolute; top: 0; bottom: 0; left: 0; width: 100%; background: rgba(200, 200, 200, 0.8);' id='" + this.loaderId + "'>" +
                "<img src='" + this.loadingImage + "' alt='loading...' style='position: absolute; top: 40%; left: 40%;'/> </div>";
            if (state) {
                $('#' + this._frameId).append(html);
            }
            else {
                $('#' + this.loaderId).remove();
            }
        },

        _bindActions: function (target, inst) {
            car_year = this.steps['step_1']['fields']['1']['id'];
            car_make = this.steps['step_1']['fields']['2']['id'];
            car_model = this.steps['step_1']['fields']['3']['id'];
            other_company = this.steps['step_4']['fields']['1']['id'];
            step_data = this.step_data
            $(document).off("change", car_year).on("change", car_year, function () {
                selected_year = $(this).val();
                var makes = {};
                $.ajax({
                    url: "https://forms.smartfinancial.com/api/v1/vehicle/makes?token=yhQwEoXKZU4y8RntnibxFmoy29UJqArr&year=" + selected_year,
                    type: 'get',
                    beforeSend: function () {
                        $.autolead._call_loader(true);
                    },
                    success: function (res) {
                        res_makes = res['makes'];
                        for (ind in res_makes) {
                            name = res_makes[ind]['name'];
                            makes[name] = name;
                        }
                        $(car_make).replaceWith($.autolead._select_field(makes, 'car_make', 'car_make', 'car_make', 'Car make', 'margin-right: 5px;'));
                        $.autolead._call_loader(false);
                        $('.error-notice').remove();
                    },
                    error: function () {
                        $.autolead._call_loader(false);
                    }
                });
            });

            $(document).off("change", car_make).on("change", car_make, function () {
                selected_year = $(this).val();
                var models = {};
                $.ajax({
                    url: "https://forms.smartfinancial.com/api/v1/vehicle/models?year=" + $(car_year).val() + "&make=" + $(car_make).val() + "&token=yhQwEoXKZU4y8RntnibxFmoy29UJqArr",
                    type: 'get',
                    beforeSend: function () {
                        $.autolead._call_loader(true);
                    },
                    success: function (res) {
                        res_models = res['models'];
                        for (ind in res_models) {
                            name = res_models[ind]['name'];
                            models[name] = name;
                        }
                        $(car_model).replaceWith($.autolead._select_field(models, 'car_model', 'car_model', 'car_model', 'Car model', ''));
                        $.autolead._call_loader(false);
                        $('.error-notice').remove();
                    },
                    error: function () {
                        $.autolead._call_loader(false);
                    }
                });
            });

            $(document).off("change", other_company).on("change", other_company, function () {
                $('.discount-services').html($.autolead._get_discount_services());
                $('#lead-premium-savings-box').hide();
            });

            $(document).off("click", this.steps['step_1']['button_id']).on("click", this.steps['step_1']['button_id'], function () {
                $.autolead._step_validation('step_1', 'step_2', '');
            });

            $(document).off("click", this.steps['step_2']['button_id']).on("click", this.steps['step_2']['button_id'], function () {
                $.autolead._step_validation('step_2', 'step_3', '');
            });

            $(document).off("click", this.steps['step_3']['button_id']).on("click", this.steps['step_3']['button_id'], function () {
                $.autolead._step_validation('step_3', 'step_4', 'this._comparison_frame()');
            });

            $(document).off('click', '.btn-back').on('click', '.btn-back', function () {
                var step = parseInt($(this).attr('id').replace('lead_back_step_', ''));
                $.autolead._step_back(step);
            });

            $(document).off("click", '.check-discount').on("click", '.check-discount', function () {
                var checkedValues = $('.check-discount:checked').map(function () {
                    return parseFloat(this.value);
                }).get();
                sum = checkedValues.reduce(function (a, b) {
                    return a + b;
                }, 0);
                current_premium = parseFloat(step_data['inc_premium']);
                discounted_premium = current_premium - ( current_premium * (sum / 100.0));
                $('#lead-monthly-premium').html(discounted_premium.toFixed(2));
                $('#lead-yearly-premium').html((discounted_premium * 12.0).toFixed(2));
                $('#lead-premium-savings').html(sum);
                $('#lead-premium-savings-box').show();
            });
        },

        _step_validation: function (current_step, next_step, callback) {
            var status = true;
            var fields = this.steps[current_step]['fields'];
            for (ind in fields) {
                field = fields[ind];
                val = $(field['id']).val();
                if (field['required'] && val == '') {
                    $('.error-notice').remove();
                    $('#' + current_step).append('<div style="margin: 0 5px; color: red; text-align: center;" class="error-notice">' + field['message'] + '</div>');
                    status = false;
                    break;
                }
                else {
                    this.step_data[field['name']] = val;
                }
            }
            if (status) {
                if (callback != '') {
                    var container = $("#" + this._frameContainerId);
                    $('#' + next_step).remove();
                    container.append(eval(callback));
                }
                $('.error-notice').remove();
                this._switch_step(current_step, next_step);
            }
        },

        _switch_step: function (current_step, next_step) {
            $("#" + current_step).animate({
                left: '-500px'
            }, 500, function () {
                $(this).hide().css('opacity', '1').hide();
                $("#" + next_step).css('right', '');
                $("#" + next_step).fadeIn();
            });
        },

        _step_back: function (step) {
            $("#step_" + step).animate({
                right: '-500px'
            }, 500, function () {
                $(this).hide().css('opacity', '1').hide();
                $("#step_" + (step - 1)).css('left', '');
                $("#step_" + (step - 1)).fadeIn();
            });
        },

        _attachLeadFrame: function (target, options) {
            var inst = {settings: ''};
            inst.settings = $.extend({}, options || {});
            $.autolead._showLeadWidget(target, inst);
        }
    });

    $.fn.autoLeadWidget = function (options) {
        options = options || {};
        return this.each(function () {
            $.autolead._attachLeadFrame(this, options);
        });
    };
    $.autolead = new AutoLeadWidget(); // singleton instance
})(jQuery);
